// import asyncHandler from 'express-async-handle'




// const registerUser = asyncHandler(async (req,res) => {
//     const user = await User.findById(req.user._id)

//     if (user) {
//         const {formBasicEmail, formBasicPassword} = req.body


//         if (!formBasicEmail || formBasicEmail === '') throw new Error('Please enter your email')
//         if (!formBasicPassword || formBasicPassword === '') throw new Error('Please enter your password')

//         user.formBasicEmail = formBasicEmail
//         user.formBasicPassword = formBasicPassword

//         const updatedUser = await user.save()

//         res.json({
//             formBasicEmail: updatedUser.formBasicEmail,
//             formBasicPassword: updatedUser.formBasicPassword,

//         })
//     } else {
//         res.status(404)
//         throw new Error(
//             'Oops, user not found'
//         )
//     }
// })

// export { registerUser}