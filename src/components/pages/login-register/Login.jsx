import React from 'react'

import Div from '../../../components/helper/Div'
import { FaAngleRight } from 'react-icons/fa';
import Card from '@/components/card/Card';
import Input from '@/components/input/input';
import Button from '@/components/button/Button';
import Link from 'next/link';
import Image from 'next/image';

import google from '../../../assets/image-logo/google.webp'
import Title from '@/components/title component/Title';

const Login = ({title}) => {
  return (
    <Div
      full
      flex
      column
      itemsCenter
      className="bg-gradient-to-b from-yellow-50 to-white"
    >
      <div className="w-full max-w-screen-maxxx px-4 pt-16 flex flex-col items-center gap-10 md:px-20 lg:max-w-[55vw]">
        {/* title */}
<Title title={'Masuk'}/>

        {/* card */}
        <Div flex column itemsCenter full>
          <Card className={"items-start max-w-screen-maxxx w-full"}>
            <h1 className="font-bold text-sm mb-1">Selamat Datang Kembali!!</h1>
            <p className="text-sm text-gray-300">
              Masukkan Kredensial Anda Untuk Masuk
            </p>

            {/* form */}
            <div className={"w-full flex flex-col gap-6 mt-6"}>
              <Input
                label={"Alamat Email"}
                type={"email"}
                placeholder={"Masukkan Email Anda"}
              />
              <Input
                label={"Kata Sandi"}
                type={"password"}
                placeholder={"Masukkan Kata Sandi Anda"}
              />

              <Button
                className={"bg-yellow-me mx-auto text-white w-full lg:max-w-48"}
              >
                Masuk
              </Button>
            </div>

            {/* bawah */}
            <div className="w-full flex flex-col items-center text-xs gap-4 mt-8">
              <p>
                Lupa kata sandi?{" "}
                <b className="hover:border-b-2 border-black pb-1 cursor-pointer">
                  Klik disini
                </b>
              </p>
              <p>
                Belum punya akun?
                <b className="hover:border-b-2 border-black pb-1 cursor-pointer">
                  <Link href={"/register"}> Silahkan Mendaftar</Link>
                </b>
              </p>

              <div className="flex justify-between items-center text-xs text-gray-text my-6">
                <hr />
                <p>Atau masuk dengan</p>
                <hr />
              </div>

              <Button
                className={
                  "border-2 border-gray-me w-[65%] py-1 grid-cols-3 px-0 md:max-w-[40%]"
                }
              >
                <Image
                  src={google}
                  width={200}
                  height={200}
                  className="w-8 object-cover"
                />
                <p className="col-span-2">Login dengan Google</p>
              </Button>
            </div>
          </Card>
        </Div>
      </div>
    </Div>
  );
}

export default Login