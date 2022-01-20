import React, { useState } from "react";

export default function LayoutComponent() {
  return (
    <div className=" bg-gradient-to-b from-purple-900 to-purple-500">
      <HeaderComponent />
      <FoodsComponent />
      <FooterComponent />
    </div>
  );
}

export function HeaderComponent() {
  return (
    <div className="text-center text-white">
      <p className="mobile:py-3 font-bold mobile:text-2xl">SIX TOP MENU</p>
      <p className="mobile:px-2 mobile:text-justify mobile:font-medium tablet:text-center">
        These are the 6 best menus in our restaurant, we highly recommend you to
        order this menu.
      </p>
      <div className="my-6">
        <button className="px-5 py-3 outline outline-2 outline-white hover:text-gray-400 hover:outline-gray-400">
          View More
        </button>
      </div>
    </div>
  );
}

export function FoodsComponent() {
  let [data] = useState({
    menu: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        nama: "Makroni",
        deskripsi: "Makanan ini merupakan makanan yang enak dan juga mantap",
        harga: 20,
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        nama: "Daging Panggang",
        deskripsi: "Makanan ini merupakan makanan yang enak dan juga mantap",
        harga: 35,
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1623855244183-52fd8d3ce2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        nama: "Rujak Bebek",
        deskripsi: "Makanan ini merupakan makanan yang enak dan juga mantap",
        harga: 20,
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        nama: "Ayam Bumbu",
        deskripsi: "Makanan ini merupakan makanan yang enak dan juga mantap",
        harga: 30,
      },
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a29yZWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        nama: "Ramen",
        deskripsi: "Makanan ini merupakan makanan yang enak dan juga mantap",
        harga: 25,
      },
      {
        id: 6,
        url: "https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        nama: "Seafood",
        deskripsi: "Makanan ini merupakan makanan yang enak dan juga mantap",
        harga: 30,
      },
    ],
  });
  return (
    <div className="py-2 mobile:px-2">
      <div className="grid mobile:grid-cols-1 mobile:gap-2 tablet:grid-cols-2 laptop:grid-cols-3 laptop:gap-6">
        {data.menu.map((items) => {
          return (
            <div
              className="mobile:w-full mobile:h-72 flex flex-col hover:cursor-pointer"
              key={items.id}
            >
              <div
                className="bg-white mobile:w-36 mobile:h-36 rounded-full mx-auto mobile:mt-2 bg-cover"
                style={{
                  backgroundImage: `url(${items.url})`,
                }}
              ></div>
              <div className="mx-auto">
                <p className=" text-white text-xl font-medium">{items.nama}</p>
              </div>
              <div className="mx-auto text-gray-400 text-center">
                <p>{items.deskripsi}</p>
              </div>
              <div className="mx-auto text-white font-medium text-3xl">
                <p>$ {items.harga}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function FooterComponent() {
  return (
    <div className=" bg-neutral-800">
      <p className="text-center py-7 text-white">
        created by{" "}
        <a
          href="https://github.com/aristrisnawan"
          className="cursor-pointer"
          target="_blank"
        >
          aristrisnawan
        </a>
      </p>
    </div>
  );
}
