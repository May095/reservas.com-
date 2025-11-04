import React from 'react'

const Item = () => {
  return (
    <a href='/home' className='flex flex-col gap-2'>
      <img src="src/components/img/images.jpg" alt="Hospedagem no campo" 
      className='aspect-square object-cover rounded-2xl'
      />
      <div>
        <h3 className='text-x font-semibold'>Resort em Campos do Jordão, São Paulo</h3>
        <p className='truncate text-gray-600'>Os Quartos Standard ou Padrão são a opção de entrada mais comum em resorts e hotéis. Eles geralmente incluem uma cama de casal ou duas camas de solteiro e comodidades básicas, como TV, banheiro privativo e espaço para guardar roupas.
          São ideais para viajantes que desejam acomodações confortáveis e acessíveis, sem muitos luxos. Ou então, que buscam principalmente explorar a região ao redor.</p>
        <p><span>R$ 500,00</span> por noite</p>
      </div>

    </a>
  )
}

export default Item;
