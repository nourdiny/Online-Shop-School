@extends('layouts.guestb')
@section('content')
        <!-- Content Start -->
        <div class="content d-grid align-content-center align-items-center">
            @foreach($order as $order)
            <!-- Widget Start -->
            <div class="container-fluid pt-4 px-4">
                    <div class="col-sm-12 ">
                        <div class="bg-secondary rounded h-100 p-4">
                            <div class="testimonial-carousel">
                                <div class="testimonial-item text-center">
                                    
                                    <img class="img-fluid rounded-circle mx-auto mb-4" src="@php
                                        $url = url('/storage/'.$order->profile_photo_path);
                                        echo $url;
                                        @endphp" 
                                        style="width: 100px; height: 100px;">
                                    <h5 class="mb-1">{{$order->name}}</h5>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <!-- Widget End -->
            <!-- Table Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary rounded h-100 p-4">
                            <p class="h5">Nr Order : INV-0{{$order->id}}</p>
                            <h6 class="mb-4"></h6>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($orderDiteles as $orderDitele)
                                    <tr >
                                        <th scope="row">{{$orderDitele->product_code}}</th>
                                        <td>
                                            <img
                                            src="@php
                                                $url = url('/storage/'.$orderDitele->main_image);
                                                echo $url;
                                                @endphp"
                                            alt="watch"
                                            className="img-fluid"
                                            style="width: 50px ;height: 50px;"
                                            />
                                        </td>
                                        <td>${{$orderDitele->price}}</td>
                                        <td>{{$orderDitele->Qty}}</td>
                                        <td>
                                            @php
                                            echo "$".$orderDitele->Qty * $orderDitele->price;
                                            @endphp
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary rounded  p-4 ">
                            <div class="d-flex justify-content-between mb-5">
                                <p class="h5">Totale : </p>
                                <p class="h5"> ${{$order->billing_total}}</p>
                            </div>
                            <div class="d-flex justify-content-between ">
                                <a href="{{ route('order' , $order->id)  }}" class="btn btn-primary m-2" ><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                                <button class="btn btn-primary m-2" onclick="window.print()"><i class="fa fa-print" aria-hidden="true"></i></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Table End -->
            @endforeach
        </div>


@stop

