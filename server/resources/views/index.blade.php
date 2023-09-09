@extends('layouts.appn')
@section('content')



            <!-- Sales Chart Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                            <div class="col-sm-6 col-xl-3">
                                <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                                    <i class="fa fa-chart-line fa-3x text-primary"></i>
                                    <div class="ms-3">
                                        <p class="mb-2">Today Sale</p>
                                        <h6 class="mb-0">${{$sumDay}}</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-3">
                                <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                                    <i class="fa fa-chart-bar fa-3x text-primary"></i>
                                    <div class="ms-3">
                                        <p class="mb-2">Total Sale</p>
                                        <h6 class="mb-0">${{$sumOrder}}</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-3">
                                <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                                    <i class="fa fa-chart-area fa-3x text-primary"></i>
                                    <div class="ms-3">
                                        <p class="mb-2">Today Users</p>
                                        <h6 class="mb-0">{{$sumDayU}}</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-3">
                                <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                                    <i class="fa fa-chart-pie fa-3x text-primary"></i>
                                    <div class="ms-3">
                                        <p class="mb-2">Total Users</p>
                                        <h6 class="mb-0">{{$sumUser}}</h6>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
            <!-- Sales Chart Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary text-center rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Salse & Revenue</h6>
                                
                            </div>
                            <canvas id="salse-revenue"></canvas>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="h-100 bg-secondary rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                                <h6 class="mb-0">Users</h6>
                                <a href="{{ route('users')}}">Show All</a>
                            </div>
                            @foreach($users as $user)
                            <div class="d-flex align-items-center border-bottom py-3">
                                <img class="rounded-circle flex-shrink-0" src="@php
                                            $url = url('/storage/'.$user->profile_photo_path);
                                                echo $url;
                                                @endphp" alt="" style="width: 40px; height: 40px;">
                                <div class="w-100 ms-3">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-0">{{$user->name}}</h6>
                                        <small></small>
                                    </div>
                                    <span>{{$user->email}}</span>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sales Chart End -->


            <!-- Recent Sales Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">Recent Salse</h6>
                        <a href="{{route('orders')}}">Show All</a>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-white">
                                    <td>#</td>
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



@stop

@section('scripts')
        // Salse & Revenue Chart
        var ctx2 = $("#salse-revenue").get(0).getContext("2d");
        var myChart2 = new Chart(ctx2, {
            type: "line",
            data: {
                labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
                datasets: [{
                        label: "Salse",
                        data: [15, 30, 255, 45, 70, 65, 85],
                        backgroundColor: "rgba(235, 22, 22, .7)",
                        fill: true
                    },
                    {
                        label: "Revenue",
                        data: [99, 135, 170, 130, 190, 180, 270],
                        backgroundColor: "rgba(235, 22, 22, .5)",
                        fill: true
                    }
                ]
                },
            options: {
                responsive: true
            }
        });
@endsection