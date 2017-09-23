// function Auth(authService){
//     this.authService = authService

//     this.signInWithFacebook = (phone,password) =>{
//       return this.authService(phone,password)
//     }
// }

// test('Mock with 1 should return 1' , () => {
//     const mockFn = jest.fn(1) // รับพารามิเตอร์แล้วคืนค่ากลับไป สมมุติส่ง 1 return 1
//         .mockReturnValue(1) // mock มัน fix ค่าให้ return 1 เสมอ

//     expect(mockFn(1)).toBe(1)
//     expect(mockFn).toBeCalledWith(1)
//     //test mock นี้ ถูกเรียกด้วย paramiter อะไร
// })

// test('Signin with valid credential should pass',()=>{
//     const returnObject={
//         name : 'Weera' ,
//         facebookId : '863852741',
//         email : 'wkasersin@gmail.com'

//     }
//     const mockFacebook = jest.fn('0817777777','abc12345')
//                                 //phonenum    password
//         .mockReturnValue(returnObject)

//     let app = new Auth(mockFacebook)
//     let value = app.signInWithFacebook('081777777','abc12345')

//     expect(value).toEqual('returnObject')
//     expect(mockFacebook).toBeCalled()
//     expect(mockFacebook).tpBeCalledWith('081777777','abc12345')
// })

function Auth(authService) {
    this.authService = authService

    this.signInWithFacebook = (phone, password) => {
        return this.authService(phone, password)
    }
}

test('Mock wtih 1 should return 1', () => {
    const mockFn = jest.fn(1)
        .mockReturnValue(1)

    expect(mockFn(1)).toBe(1)
    expect(mockFn).toBeCalledWith(1)
})

test('Signin with valid credential should pass', () => {
    const returnObject = {
        name: 'Weera',
        facebookId: '963852741',
        email: 'wkasetsin@gmail.com'
    }

    const mockFacbook = jest.fn('0817777777', 'abc12345')
        .mockReturnValue(returnObject)

    let app = new Auth(mockFacbook)
    let value = app.signInWithFacebook('0817777777', 'abc12345')

    expect(value).toEqual(returnObject)
    expect(mockFacbook).toBeCalled()
    expect(mockFacbook).toBeCalledWith('0817777777', 'abc12345')
})