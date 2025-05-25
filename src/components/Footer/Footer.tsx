import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import Button from '../Button/Button'
import Link from '../Link/Link'

const Footer = () => {
    return (
        <footer className='pb-16 flex flex-col gap-y-4 sm:flex-row justify-between w-full'>
            <div className='flex flex-col gap-4'>
                <p>
                    &copy; 2025 VitaPasser AC-221 ONPU.
                </p>
                <section className='flex flex-col gap-1'>
                    <Link className='w-fit' href="/info/police-confidence">Умови обслуговування</Link>
                    <Link className='w-fit' href="/info/terms-of-service">Політика конфіденційності</Link>
                </section>
                <div>
                    <label>
                        <p className='flex flex-row content-center items-center gap-2'><FiMail /> Підписатись на нові оголошення та новини</p>
                        <div className='flex flex-row content-center items-center gap-2 max-sm:flex-col'>
                            <input className='border-[1px] border-black px-4 py-1 ' type="text" />
                            <Button className='max-sm:rounded-full'>Підписатись <FaArrowRight /></Button>
                        </div>
                    </label>
                </div>
            </div>
            <div className='flex flex-col content-center justify-center gap-4'>
                <div className='flex flex-col content-center justify-center gap-1'>
                    <Link className='w-fit' href="https://www.linkedin.com/in/vitalii-vorobiov-42613725b/" >Linkedin</Link>
                    <Link className='w-fit' href="https://t.me/VitaPasser" >Telegram</Link>
                </div>
                <div className='flex flex-col content-center justify-center'>
                    <p>Для рекламодавців:</p>
                    <Link className='w-fit' href="tel:+38098XXXXXXX" >+380 98 XXXXXXX</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer