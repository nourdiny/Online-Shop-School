@extends('layouts.appn')
@section('content')

            <!-- Sales Chart Start -->
            <div class="container-fluid pt-4 px-4">
                <p class="h3 mb-5">Orders</p>
                <div class="row g-4">
                            <div class="col-sm-6">
                                <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                                    <i class="fa fa-chart-area fa-3x text-primary"></i>
                                    <div class="ms-3">
                                        <p class="mb-2">Today Orders</p>
                                        <h6 class="mb-0">{{$countDay}}</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                                    <i class="fa fa-chart-pie fa-3x text-primary"></i>
                                    <div class="ms-3">
                                        <p class="mb-2">Total Orders</p>
                                        <h6 class="mb-0">{{$countOrder}}</h6>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
            <!-- Sales Chart End -->
            <!-- Recent Sales Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">All Orders</h6>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-white">
                                    <th scope="col">#</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Invoice</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                @foreach($orders as $order)
                                <tr>
                                    <td>{{$order->id}}</td>
                                    <td>
                                        @php
                                            $created_at_parts = explode(' ',$order->created_at);
                                            $date = \Carbon\Carbon::createFromFormat('Y-m-d', $created_at_parts[0]);
                                            $formatted_date = $date->format('d M Y');
                                            echo $formatted_date;
                                        @endphp
                                    </td>
                                    <td>INV-0{{$order->id}}</td>
                                    <td>{{$order->name}}</td>
                                    <td>${{$order->billing_total}}</td>
                                    <td>
                                        @php
                                        if($order->Status > 0){
                                            echo "Paid";
                                        }
                                        else{
                                            echo "Diap";
                                        }
                                        @endphp
                                    </td>
                                    <td><a class="btn btn-sm btn-primary" href="{{ route('order' , $order->id)  }}">Detail</a></td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- Recent Sales End -->
            <!-- {{$orders}} -->
            <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-center mb-4">
                    {{$orders->links()}}
            </div>
            </div>
            </div>
@stop

<script>
    console.log({{$orders}});
</script>