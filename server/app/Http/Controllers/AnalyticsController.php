<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use App\Models\invoice;
use Illuminate\Http\Request;
use ConsoleTVs\Charts\Facades\Charts;

class AnalyticsController extends Controller
{
    //
    public function index(Request $request)
    {
        // Fetch data from the database
        $order = Order::take(5)->join('users', 'orders.user_id', '=', 'users.id')
        ->select('orders.*', 'users.name')->orderBy('created_at', 'desc')->get();
        $users = User::take(5)->orderBy('created_at', 'desc')->get();
        $sumOrder = Order::sum('billing_total');
        $sumDay = Order::whereRaw('DATE(created_at) = CURDATE()')->sum('billing_total');
        $sumUser= User::count('*');
        $sumDayU = User::whereRaw('DATE(created_at) = CURDATE()')->count('*');
        // Render the view with the chart data
        return view('index', ['orders'=> $order ,'users'=> $users , "sumOrder" => $sumOrder ,  "sumDay" => $sumDay, "sumUser" => $sumUser ,  "sumDayU" => $sumDayU]);
    }

    public function allOrders(Request $request)
    {
        // Fetch data from the database
        $order = Order::query()->join('users', 'orders.user_id', '=', 'users.id')->select('orders.*', 'users.name')->orderBy('created_at', 'desc')->paginate(10);

        $countOrder = Order::count('*');
        $countDay = Order::whereRaw('DATE(created_at) = CURDATE()')->count();

        // Render the view with the chart data
        // dd($order->links());
        return view('allOrders', ['orders'=> $order , "countOrder" => $countOrder , "countDay" => $countDay]);
    }

    public function singleOrder(Request $request)
    {
        // Fetch data from the database
        $order = Order::select('orders.*', 'users.name', 'users.profile_photo_path')
                ->join('users', 'users.id', '=', 'orders.user_id')
                ->where('orders.id', '=', $request->id)
                ->get();
        $orderDetails = Order::select('products.*', 'order_products.quantity as Qty')
                ->join('order_products', 'orders.id', '=', 'order_products.order_id')
                ->join('products', 'products.id', '=', 'order_products.product_id')
                ->where('orders.id', '=', $request->id)
                ->get();

        // Render the view with the chart data
        // dd($orderDetails);
        return view('singleOrder', ['order'=> $order , "orderDiteles" => $orderDetails]);
    }

    public function allUsers(Request $request){
        $users = User::query()->select('users.*')->orderBy('created_at', 'desc')->paginate(10);
        $sumUser= User::count('*');
        $sumDayU = User::whereRaw('DATE(created_at) = CURDATE()')->count('*');

        return view('users', ['users'=> $users ,  "sumUser" => $sumUser ,  "sumDayU" => $sumDayU]);
    }

    public function invoice(Request $request){
        $isExist = Invoice::where('order_id', $request->id)->get();
        if(count($isExist) == 0){
            $invoice = Invoice::create([
                "order_id" => $request->id,
                "invoice_number" => 'INV-0'.$request->id,
            ]);
        }

        $order = Order::select('orders.*', 'users.name', 'users.profile_photo_path')
                ->join('users', 'users.id', '=', 'orders.user_id')
                ->where('orders.id', '=', $request->id)
                ->get();
        $orderDetails = Order::select('products.*', 'order_products.quantity as Qty')
                ->join('order_products', 'orders.id', '=', 'order_products.order_id')
                ->join('products', 'products.id', '=', 'order_products.product_id')
                ->where('orders.id', '=', $request->id)
                ->get();
        // return redirect()->route('order' ,$request->id);
        return  view('invoice', ['order'=> $order , "orderDiteles" => $orderDetails]);
    }
}
