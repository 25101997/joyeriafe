import React from "react";
import "./Product.css";
import Card from "../../components/Card/Card";

const Product = () => {
  return (
        <section className="product__container">
          <div className="product__items__container">
            <Card title="anillo" price={449} img="https://media.es.wired.com/photos/6501e7429fa9000811a95fe8/16:9/w_2560%2Cc_limit/Adobe%2520Firefly.jpeg" />
            <Card title="esclava" price={449} img="https://walmartgt.vtexassets.com/arquivos/ids/216124/MALHER-Pimienta-Negra-en-Polvo-Frasco-55g-1-8363.jpg?v=637714651219570000" />
            <Card title="cadena" price={449} />
            <Card title="pulcera" price={449} />
            <Card title="collar" price={449} />
            <Card title="aretes" price={449} />
          </div>
        </section>
  );
};

export default Product;