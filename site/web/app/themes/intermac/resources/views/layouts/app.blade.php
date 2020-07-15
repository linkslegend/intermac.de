<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')
  <body @php body_class() @endphp>
    @php do_action('get_header') @endphp
    @include('partials.header')
      <div id="scroll-container" class="scroll-container" data-barba="wrapper">
        <div class="wrap container" role="document" >
          <div class="content" data-barba="container" data-barba-namespace="{{$post->post_name}}">
            <main class="main">
              @yield('content')
            </main>
            @if (App\display_sidebar())
              <aside class="sidebar">
                @include('partials.sidebar')
              </aside>
            @endif
          </div>
        </div>
      </div>
    <div class="svg-wrapper">
      <div class="svg-inner">
      </div>
    </div>
    @php do_action('get_footer') @endphp
    @include('partials.footer')
    @php wp_footer() @endphp
  </body>
</html>
