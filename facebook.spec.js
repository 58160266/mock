test('Mock with 1 should return 1' , () => {
    const mockFn = jest.fn(1) // รับพารามิเตอร์แล้วคืนค่ากลับไป สมมุติส่ง 1 return 1
        .mockReturnValue(1) // mock มัน fix ค่าให้ return 1 เสมอ

    expect(mockFn1()).toBe(1)
    expect(mockFn).toBeCalledWith(1)
    //test mock นี้ ถูกเรียกด้วย paramiter อะไร
})