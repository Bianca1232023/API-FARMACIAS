export default function Banner() {
  return (
    <section className="bg-gray-100 text-center p-6">
      <h2 className="text-xl font-bold text-blue-900">Prepare-se para o frio!</h2>
      <p className="text-sm text-gray-600">Cuide-se bem nesta estação</p>
      <div className="flex justify-center mt-4">
        <img
          src="/produtos.png"
          alt="Produtos em oferta"
          className="h-24 object-contain"
        />
      </div>
      <p className="text-blue-700 font-semibold mt-2">10% OFF<br />CONFIRA</p>
    </section>
  );
}
