import React from "react";

import Div from "../../../components/helper/Div";
import Card from "@/components/card/Card";
import Input from "@/components/input/input";
import Button from "@/components/button/Button";
import Image from "next/image";

import google from "../../../assets/image-logo/google.webp";
import Title from "@/components/title component/Title";

const Register = () => {
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
        <Title title={'Daftar'}/>

        {/* card */}
        <Div flex column itemsCenter full>
          <Card className={"items-start max-w-screen-maxxx w-full"}>
            <h1 className="font-bold text-sm mb-1">Akun Baru</h1>
            <p className="text-sm text-gray-500">
              Dengan membuat akun Anda akan dapat berbelanja lebih cepat,
              dapatkan kupon dan poin dalam setiap pembelian, dapatkan pembaruan
              tentang barang dan promosi kami.
            </p>

            {/* form */}
            <div className={"w-full flex flex-col gap-6 mt-6"}>
              <Input
                label={"Email"}
                type={"email"}
                placeholder={"Email Anda"}
              />
              <Input
                label={"Kata Sandi"}
                type={"password"}
                placeholder={"Kata Sandi Anda"}
              />
              <Input
                label={"Konfirmasi Kata Sandi"}
                type={"password"}
                placeholder={"Konfirmasi Kata Sandi Anda"}
              />
              <Input
                label={"Nama lengkap"}
                type={"text"}
                placeholder={"Masukkan Nama Lengkap Anda"}
              />

              <Button
                className={"bg-yellow-me mx-auto text-white w-full lg:max-w-48"}
              >
                Daftar
              </Button>
            </div>

            {/* bawah */}
            <div className="w-full flex flex-col items-center text-xs gap-4 mt-8 ">
              <p className="text-center">
                Dengan klik 'Daftar' berarti Anda setuju dan mengetahui
                <b className="hover:border-b-2 border-black pb-1 cursor-pointer text-blue-400 mx-1">
                  Syarat & Ketentuan
                </b>
                serta
                <b className="hover:border-b-2 border-black pb-1 cursor-pointer text-blue-400 mx-1">
                  Kebijakan Privasi
                </b>
                dari MILLS
              </p>

              <div className="flex justify-between items-center text-xs text-gray-text my-6">
                <hr />
                <p>Atau daftar dengan</p>
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
                  alt="popo"
                />
                <p className="col-span-2">Daftar dengan Google</p>
              </Button>
            </div>
          </Card>
        </Div>
      </div>
    </Div>
  );
};

export default Register;
