import React from 'react'

type Props = {}

// translate this code to dart , its just a bash script
// // subtract 2 days worth of seconds from a months seconds, using dart
// const month = 30 * 24 * 60 * 60
// const twoDays = 2 * 24 * 60 * 60
// const secondsInAMonth = month - twoDays
// console.log(secondsInAMonth)


const EmailVerification = (props: Props) => {
    return (
        <main className='p-10'>
            <h1 className='text-5xl text-amber-400'>Email Verification</h1>
            <h2>SUCCESS</h2>
            <p>Thank you for verifying your account</p>

        </main>
    )
}

export default EmailVerification