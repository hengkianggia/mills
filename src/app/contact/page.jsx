import Button from '@/components/button/Button';
import Card from '@/components/card/Card';
import Div from '@/components/helper/Div'
import Input from '@/components/input/Input';
import Title from '@/components/title component/Title';
import React from 'react'

const page = () => {
  return (
    <Div wrap>
      <Div wrap maxWidth className="px-4">
        <Title title={`Kontak kami`} />

        <Card className={"lg:max-w-[60%]"}>
          <Div flex column className="gap-4">
            <h1>Kirimkam kami pesan</h1>
            <Input label="Nama" placeholder="Insert your name here" />
            <Input label="Judul" placeholder="Insert subject here" />
            <Input label="No Whatsapp" placeholder="Insert your phone here" />
            <Input label="Email" placeholder="Insert your email here" />
            <Input
              label="Pesan"
              placeholder="Insert your message here"
              type="textarea"
              className={"min-h-20"}
            />
            <Button className={"bg-yellow-me text-white"}>Kirimkan</Button>

            <Div wrap>
              <p className='text-center text-xs max-w-[80%] leading-relaxed'>
                Dengan mengklik tombol 'Kirimkan', Customer menyatakan
                persetujuan apabila Merchant menggunakan detail yang diberikan
                untuk menghubungi Customer tentang permintaan atau pertanyaan
                khusus Anda. Kunjungi halaman Kebijakan Privasi untuk detail
                mekanisme kami mengelola informasi Customer.
              </p>
            </Div>
          </Div>
        </Card>
      </Div>
    </Div>
  );
}

export default page