import ShoppinCart from "@/app/shopping-cart/components/shopping-cart/ShoppinCart";

export const metadata = {
  title: "Un Ejemplo",
  description: "Un Ejemplo",
};

const CounterPage = () => {

  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <h2>Productos en el Carrito</h2>
      <ShoppinCart />
    </div>
  );
};

export default CounterPage;
