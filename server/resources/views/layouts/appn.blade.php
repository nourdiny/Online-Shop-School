<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Shop School</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap" rel="stylesheet"> 
    
    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="{{ asset('lib/owlcarousel/assets/owl.carousel.min.css') }}" rel="stylesheet">
    <link href="{{ asset('lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css') }}" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    
</head>

<body>
    <div class="container-fluid position-relative d-flex p-0">
        <!-- Spinner Start -->
        <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <!-- Spinner End -->

        <!-- Sidebar Start -->
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-secondary navbar-dark">
                <a href="" class="navbar-brand mx-4 mb-3">
                    <h3 class="text-primary">DarkPan</h3>
                </a>
                <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                        <img class="rounded-circle" 
                        src="@php
                             $url = url('/storage/'.Auth::user()->profile_photo_path);
                             echo $url;
                            @endphp" 
                        alt="" style="width: 40px; height: 40px;">
                        <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div class="ms-3">
                        <h6 class="mb-0">{{ Auth::user()->name }}</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div class="navbar-nav w-100">
                    <a href="{{route('index')}}" class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                    <!-- <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>Elements</a>
                        <div class="dropdown-menu bg-transparent border-0">
                            <a href="button.html" class="dropdown-item">Buttons</a>
                            <a href="typography.html" class="dropdown-item">Typography</a>
                            <a href="element.html" class="dropdown-item">Other Elements</a>
                        </div>
                    </div> -->
                    <a href="{{route('orders')}}" class="nav-item nav-link"><i class="fa fa-th me-2"></i>Ordres</a>
                    <a href="{{route('users')}}" class="nav-item nav-link"><i class="fa fa-th me-2"></i>Users</a>

                </div>
            </nav>
        </div>
        <!-- Sidebar End -->

        <!-- Content Start -->
        <div class="content">
            @include('layouts.navigation')

            <!-- Page Content -->

            @yield('content')
                
            <!-- Footer Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary rounded-top p-4">
                    <div class="row">
                        <div class="col-12 col-sm-6 text-center text-sm-start">
                            &copy; 2023 , created by <a href="#">Mws</a>, All Right Reserved. 
                        </div>
                        
                    </div>
                </div>
            </div>
            <!-- Footer End -->

        </div>
        <!-- Content End -->


        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('lib/chart/chart.min.js') }}"></script>
    <script src="{{ asset('lib/easing/easing.min.js') }}"></script>
    <script src="{{ asset('lib/waypoints/waypoints.min.js') }}"></script>
    <script src="{{ asset('lib/owlcarousel/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('lib/tempusdominus/js/moment.min.js') }}"></script>
    <script src="{{ asset('lib/tempusdominus/js/moment-timezone.min.') }}"></script>
    <script src="{{ asset('lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js') }}"></script>

    <!-- Template Javascript -->
    <script >
        (function ($) {
        "use strict";

        // Spinner
        var spinner = function () {
            setTimeout(function () {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 1);
        };
        spinner();
        
        
        // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
            return false;
        });


        // Sidebar Toggler
        $('.sidebar-toggler').click(function () {
            $('.sidebar, .content').toggleClass("open");
            return false;
        });


        // Progress Bar
        $('.pg-bar').waypoint(function () {
            $('.progress .progress-bar').each(function () {
                $(this).css("width", $(this).attr("aria-valuenow") + '%');
            });
        }, {offset: '80%'});


        // // Calender
        // $('#calender').datetimepicker({
        //     inline: true,
        //     format: 'L'
        // });


        // // Testimonials carousel
        // $(".testimonial-carousel").owlCarousel({
        //     autoplay: true,
        //     smartSpeed: 1000,
        //     items: 1,
        //     dots: true,
        //     loop: true,
        //     nav : false
        // });


        // Chart Global Color
        Chart.defaults.color = "#6C7293";
        Chart.defaults.borderColor = "#000000";



        @yield('scripts')

        

        // // Single Line Chart
        // var ctx3 = $("#line-chart").get(0).getContext("2d");
        // var myChart3 = new Chart(ctx3, {
        //     type: "line",
        //     data: {
        //         labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
        //         datasets: [{
        //             label: "Salse",
        //             fill: false,
        //             backgroundColor: "rgba(235, 22, 22, .7)",
        //             data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
        //         }]
        //     },
        //     options: {
        //         responsive: true
        //     }
        // });


        // // Single Bar Chart
        // var ctx4 = $("#bar-chart").get(0).getContext("2d");
        // var myChart4 = new Chart(ctx4, {
        //     type: "bar",
        //     data: {
        //         labels: ["Italy", "France", "Spain", "USA", "Argentina"],
        //         datasets: [{
        //             backgroundColor: [
        //                 "rgba(235, 22, 22, .7)",
        //                 "rgba(235, 22, 22, .6)",
        //                 "rgba(235, 22, 22, .5)",
        //                 "rgba(235, 22, 22, .4)",
        //                 "rgba(235, 22, 22, .3)"
        //             ],
        //             data: [55, 49, 44, 24, 15]
        //         }]
        //     },
        //     options: {
        //         responsive: true
        //     }
        // });


        // // Pie Chart
        // var ctx5 = $("#pie-chart").get(0).getContext("2d");
        // var myChart5 = new Chart(ctx5, {
        //     type: "pie",
        //     data: {
        //         labels: ["Italy", "France", "Spain", "USA", "Argentina"],
        //         datasets: [{
        //             backgroundColor: [
        //                 "rgba(235, 22, 22, .7)",
        //                 "rgba(235, 22, 22, .6)",
        //                 "rgba(235, 22, 22, .5)",
        //                 "rgba(235, 22, 22, .4)",
        //                 "rgba(235, 22, 22, .3)"
        //             ],
        //             data: [55, 49, 44, 24, 15]
        //         }]
        //     },
        //     options: {
        //         responsive: true
        //     }
        // });


        // // Doughnut Chart
        // var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
        // var myChart6 = new Chart(ctx6, {
        //     type: "doughnut",
        //     data: {
        //         labels: ["Italy", "France", "Spain", "USA", "Argentina"],
        //         datasets: [{
        //             backgroundColor: [
        //                 "rgba(235, 22, 22, .7)",
        //                 "rgba(235, 22, 22, .6)",
        //                 "rgba(235, 22, 22, .5)",
        //                 "rgba(235, 22, 22, .4)",
        //                 "rgba(235, 22, 22, .3)"
        //             ],
        //             data: [55, 49, 44, 24, 15]
        //         }]
        //     },
        //     options: {
        //         responsive: true
        //     }
        // });

        
    })(jQuery);


    </script>
</body>

</html>
