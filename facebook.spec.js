test('Mock with 1 should return 1' , () => {
    const mockFn = jest.fn() // รับพารามิเตอร์แล้สคืนค่ากลับไป
        .mockReturnValue(1)
    expect(mockFn()).toBe(1)
})