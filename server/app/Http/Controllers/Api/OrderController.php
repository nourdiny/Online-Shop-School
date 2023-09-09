<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Order_product;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOrderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderRequest $request)
    {
        //
        $data = $request->validated();
        $order = Order::create([
            'user_id' => $data['user_id'],
            'billing_total' => $data['billing_total'],
        ]);
        foreach ($data['order_product'] as $order_product) {
            $order_pro = Order_product::create([
                'order_id' => $order->id,
                'product_id' => $order_product['id'],
                'quantity' => $order_product['Qty'],
            ]);
        }
        return response(compact('order', 'order_pro'));;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
        $orders = Order::query()
                            ->join('order_products', 'orders.id', '=', 'order_products.order_id')
                            ->join('products', 'products.id', '=', 'order_products.product_id')
                            ->select('orders.id as order_id', 'orders.user_id', 'orders.billing_total', 'orders.created_at as date_at', 'products.*', 'order_products.quantity')
                            ->where('orders.user_id', $order->id)
                            ->paginate(10);
        return response($orders);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOrderRequest  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
        $order->delete();
        return response("Ok");;
    }
}
