import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function BakeryAdmin() {
  const [products, setProducts] = useState([
    { id: 1, name: "Baguette", price: "$2.50" },
    { id: 2, name: "Croissant", price: "$1.80" },
  ]);
  const [orders, setOrders] = useState([
    {
      id: 101,
      customer: "Juan Pérez",
      items: "2 Croissants",
      pickup: "10:30 AM",
    },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <Tabs defaultValue="products">
        <TabsList>
          <TabsTrigger value="products">Productos</TabsTrigger>
          <TabsTrigger value="orders">Pedidos</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <h2 className="text-xl font-semibold mt-4">Gestión de Productos</h2>
          <div className="flex gap-2 my-4">
            <Input placeholder="Nombre del producto" />
            <Input placeholder="Precio" />
            <Button>Agregar</Button>
          </div>
          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>
                    <Button variant="outline">Editar</Button>
                    <Button variant="destructive">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TabsContent>

        <TabsContent value="orders">
          <h2 className="text-xl font-semibold mt-4">Pedidos Recientes</h2>
          <Table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Pedido</th>
                <th>Hora de Recogida</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.customer}</td>
                  <td>{o.items}</td>
                  <td>{o.pickup}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}
