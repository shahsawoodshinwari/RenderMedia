import axios from 'axios'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useBookingStore } from '@/stores/bookingStore'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import CategoryIndex from '@/components/Category/CategoryIndex.vue'
import { useBookingFormStepsStore } from '@/stores/bookingFormSteps'

describe('CategoryIndex.vue', () => {
  let wrapper
  let bookingStore
  let bookingFormStepsStore

  beforeEach(() => {
    vi.spyOn(axios, 'get').mockResolvedValue({
      data: [{ id: 1, name: 'Test Category', cover: 'test.jpg' }],
    })

    const pinia = createTestingPinia({ createSpy: vi.fn })

    bookingStore = useBookingStore()
    bookingFormStepsStore = useBookingFormStepsStore()

    wrapper = mount(CategoryIndex, {
      global: {
        plugins: [pinia],
      },
      data() {
        return {
          categories: [{ id: 1, name: 'Test Category', cover: 'test.jpg' }],
          isLoading: false,
        }
      },
    })
  })

  it('renders the title and description', () => {
    expect(wrapper.text()).toContain('Are You Looking For ?')
    expect(wrapper.text()).toContain('Are you looking for the key to unlock your next opportunity?')
  })

  it('shows skeleton loaders while loading', async () => {
    const wrapper = mount(CategoryIndex, {
      data() {
        return {
          isLoading: true,
        }
      },
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('.placeholder-glow').length).toBe(4)
  })

  it('fetches categories on mount', async () => {
    await wrapper.vm.fetchCategories()
    expect(wrapper.vm.categories.length).toBe(1)
    expect(wrapper.vm.categories[0].name).toBe('Test Category')
  })

  it('renders categories after fetching', async () => {
    await wrapper.vm.fetchCategories()
    await wrapper.setData({ isLoading: false })
    expect(wrapper.findAll('.cursor-pointer').length).toBe(1)
  })

  it('calls next() when a category is clicked', async () => {
    await wrapper.vm.$nextTick()

    const categoryDiv = wrapper.find('.cursor-pointer')
    expect(categoryDiv.exists()).toBe(true)

    await categoryDiv.trigger('click')

    expect(bookingStore.setCategoryId).toHaveBeenCalledTimes(1)
    expect(bookingStore.setCategoryId).toHaveBeenCalledWith(1)

    expect(bookingFormStepsStore.setTab).toHaveBeenCalledTimes(1)
    expect(bookingFormStepsStore.setTab).toHaveBeenCalledWith('ShootingType')
  })
})
