<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Devils Corral') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/main.js') }}"></script>
    <script src="{{ asset('js/lightbox-plus-jquery.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
    <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>
    <script src="https://kit.fontawesome.com/0d6cb8f635.js"></script>
    <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/video-js.css') }}" rel="stylesheet">
    <link href="{{ asset('css/lightbox.css') }}" rel="stylesheet">
    <link href="{{ asset('css/video.scss') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.css">
    <link href="https://vjs.zencdn.net/7.6.0/video-js.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Cairo&display=swap" rel="stylesheet">
</head>

<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-right" style="box-sizing: content-box">
            <a class="navbar-brand pr-5" href="{{ url('/') }}"><img src="/images/logos/devils_logo_sm.png"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="{{ url('/home') }}" class="nav-link nav-link-fade-up">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link nav-link-fade-up dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Development</a>
                        <div class="dropdown-menu">
                            <a href="{{ url('/programs') }}" class="dropdown-item">Ideas</a>
                            <a href="{{ url('/map') }}" class="dropdown-item">Maps</a>
                            <a href="{{ url('/book') }}" class="dropdown-item">Strategy</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link nav-link-fade-up dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Videos</a>
                        <div class="dropdown-menu">
                            <a href="{{ url('/video-one') }}" class="dropdown-item">Premiere of strategy</a>
                            <a href="{{ url('/video-two') }}" class="dropdown-item">The voyage</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="{{ url('/investment') }}"
                            class="nav-link nav-link-fade-up">Investment<br>Opportunities</a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ url('/photos/1') }}" class="nav-link nav-link-fade-up">News - Press</a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ url('/contact') }}" class="nav-link nav-link-fade-up">Contact</a>
                    </li>
                </ul>
                <!-- Right Side Of Navbar -->
                <!-- Authentication Links -->
                <!-- @guest
                    @if (Route::has('register'))@endif -->
                <!-- @else -->
                @if (Route::has('register'))
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->name }} <span class="caret"></span>
                        </a>

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>

                            <a class="dropdown-item" href="{{ url('/stats/1') }}">
                                Website Stats
                            </a>
                        </div>
                    </li>
                </ul>
                @endif
                <!-- @endguest -->
            </div>

        </nav>

        <main class="pt-5">
            @yield('content')
        </main>
        @yield('footer')
    </div>
    <script src='https://vjs.zencdn.net/7.6.0/video.min.js'></script>
    <script>baguetteBox.run('.tz-gallery');</script>
    <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>
</body>

</html>