import nodemailer from 'nodemailer'
import { emailHtml } from './user.email.html.js'
import { generateToken } from '../utils/generateToken.js'

export const sendEmail = async(options)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nada.aly5613@gmail.com',
            pass: 'zsmkyojhagaaktlr'
        }
    })
    const token = generateToken({email: options.email})
    const info = await transporter.sendMail({
        from: '"Nada Ahmed" <nada.aly5613@gmail.com>',
        to: options.email,
        subject: 'Making sure',
        html: emailHtml(token, options.redirectLink)
    })
}