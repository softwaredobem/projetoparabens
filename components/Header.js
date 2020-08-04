import React from 'react'
import Link from 'next/link'

const MenuItem = ({ href, label }) => {
    return (
        <li className='inline-block p-4 hover:bg-gray-100'><Link href={href}><a className='hover:underline'>{label}</a></Link></li>
    )
}

const Header = () => {
    return (
        <div>
            <h1 className='inline-block'><Link href='/'><a><img src='/logo.png' alt='Projeto Parabéns' /></a></Link></h1>
            <div>
                <ul className='inline-block'>
                    <MenuItem href='/o-projeto' label='O projeto' />
                    <MenuItem href='/novidades' label='Novidades' />
                    <MenuItem href='/parceiros' label='Parceiros' />
                    <MenuItem href='/loja' label='Loja' />
                    <MenuItem href='/contato' label='Contato' />
                </ul>
                <ul className='float-right'>
                    <li className='inline-block p-4 hover:bg-gray-100'><Link href={'/seja-voluntario'}><a className='hover:underline'>Seja voluntário</a></Link></li>
                    <li className='inline-block p-4 text-white rounded bg-blue-800 hover:bg-blue-900'><Link href={'/doar'}><a className='hover:underline'>Doar</a></Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header
