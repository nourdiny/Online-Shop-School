@extends('layouts.appn')
@section('content')
            <!-- Sales Chart Start -->
            <div class="container-fluid pt-4 px-4">
                <p class="h3 mb-5">Users</p>
                        <div class="row g-4">
                            <div class="col-sm-6">
                                <div class="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                                    <i class="fa fa-chart-area fa-3x text-primary"></i>
                                    <div class="ms-3">
                                        <p class="mb-2">Today Users</p>
                                        <h6 class="mb-0">{{$sumDayU}}</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
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
            <!-- Sales Chart End -->
            <!-- Recent Sales Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">All Users</h6>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-white">
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($users as $user)
                                <tr>
                                    <td>{{$user->id}}</td>
                                    <td>
                                        <img
                                            src="@php
                                            $url = url('/storage/'.$user->profile_photo_path);
                                                echo $url;
                                                @endphp"
                                            alt="watch"
                                            className="img-fluid"
                                            style="width: 50px ;height: 50px;overflow: hidden;    border-radius: 50%;"
                                        />
                                    </td>
                                    <td>{{$user->name}}</td>
                                    <td>{{$user->email}}</td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- Recent Sales End -->
            <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-center mb-4">
                    {{$users->links()}}
            </div>
            </div>
            </div>


@stop

