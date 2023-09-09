@extends('layouts.guestb')
@section('content')


        <!-- Sign In Start -->
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                
                    <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                        <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                            <div class="d-flex align-items-center justify-content-center mb-3">
                                <h3>Login</h3>
                            </div>
                            <form method="POST" action="{{ route('login') }}">
                                @csrf
                                <div class="form-floating mb-3">
                                    <x-text-input id="email" class="form-control" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
                                    <label for="email">Email address</label>
                                    <x-input-error :messages="$errors->get('email')" class="mt-2" />
                                </div>
                                <div class="form-floating mb-4">
                                    

                                    <x-text-input id="password" class="form-control" 
                                                    type="password"
                                                    name="password"
                                                    required autocomplete="current-password" />
                                    <label for="password">Password</label>
                                    <x-input-error :messages="$errors->get('password')" class="mt-2" />
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-4">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" 
                                        id="remember_me" name="remember">
                                        <label class="form-check-label" for="remember_me">Check me out</label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary py-3 w-100 mb-4">Login</button>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
        <!-- Sign In End -->
        
@stop