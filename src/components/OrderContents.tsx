import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div>
      <h2 className='font-black text-4xl'>Consumo</h2>

      <div className="space-y-3 mt-10">
            {order.map( item => (
                    <div 
                        key={item.id}
                        className="flex justify-between items-center border-t border-gray-200 py-4 last-of-type:border-b"
                    >
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>

                        <button 
                            className="bg-yellow-600 h-6 w-14 text-white"
                            onClick={() => removeItem(item.id)}
                        >
                            Borrar
                        </button>
                    </div>
                ))
            }
      </div>
    </div>
  )
}
