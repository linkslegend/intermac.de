<header id="header" data-scroll class="banner navbar navbar-expand-md is-at-top">
  <div class="container-fluid">
    <a class="brand intermac-logo" href="{{ home_url('/') }}">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 200 50" xml:space="preserve">
        <path class="fillcolor" d="M8.2 18.3v22.3h5.5V18.3H8.2zM35 40.7V29c0-3.4-1.9-6-5.4-6-3.4 0-5.7 2.8-5.7 6.2v11.4h-5.5V18.4h4.9l.4 3c2.3-2.2 4.5-3.3 7.3-3.3 5.2 0 9.4 3.9 9.4 10.9v11.7H35zm17.1-28.5v6.3h6.1v4.7H52v9.6c0 2.1 1.2 3.2 2.9 3.2.9 0 1.9-.3 2.7-.7l1.5 4.7c-1.6.6-2.9.9-4.6.9-4.8.2-8-2.6-8-8.1v-9.6h-4.2v-4.7h4.2v-5.7l5.6-.6zM67 31.5c.4 2.8 2.8 4.7 6.6 4.7 2 0 4.7-.8 6-2.1l3.5 3.5c-2.3 2.4-6.2 3.6-9.6 3.6-7.7 0-12.2-4.7-12.2-11.9 0-6.8 4.6-11.6 11.8-11.6 7.5 0 12.1 4.6 11.2 13.8H67zM79.1 27c-.4-2.9-2.6-4.3-5.8-4.3-3 0-5.4 1.4-6.2 4.3h12zm14.7-8.6l.4 2.6c1.7-2.8 4-3.2 6.3-3.2s4.5.9 5.7 2.1l-2.5 4.8c-1.1-.9-2.2-1.4-4-1.4-2.9 0-5.6 1.5-5.6 5.6v11.7h-5.5V18.4h5.2zm29.3 22.3V28.8c0-2.9-1.5-5.6-4.6-5.6-3 0-4.7 2.7-4.7 5.6v11.9h-5.5V18.4h5.1l.4 2.7c1.2-2.3 3.7-3.1 5.9-3.1 2.7 0 5.3 1.1 6.6 4.2 2-3.2 4.6-4.1 7.4-4.1 6.3 0 9.4 3.9 9.4 10.6v12h-5.5v-12c0-2.9-1.2-5.4-4.2-5.4s-4.8 2.6-4.8 5.5v11.9h-5.5zm43.3-22.3h5.3v22.3h-5.2l-.3-3.3c-1.3 2.6-4.7 3.9-7.2 3.9-6.6 0-11.5-4-11.5-11.8 0-7.7 5.1-11.7 11.6-11.6 3 0 5.8 1.4 7.1 3.6l.2-3.1zM153 29.5c0 4.2 2.9 6.8 6.6 6.8 8.7 0 8.7-13.5 0-13.5-3.7 0-6.6 2.5-6.6 6.7zm42.9 8.3c-2.6 2.5-5.3 3.5-8.6 3.5-6.5 0-11.8-3.9-11.8-11.8s5.4-11.8 11.8-11.8c3.2 0 5.6.9 8 3.3l-3.5 3.7c-1.3-1.2-2.9-1.8-4.5-1.8-3.7 0-6.4 2.7-6.4 6.6 0 4.2 2.9 6.5 6.3 6.5 1.8 0 3.5-.5 4.9-1.9l3.8 3.7zM5.2 8.3l3.9-.5 1.7-3.6 1.8 3.5 3.9.6-2.8 2.8.7 3.8-3.5-1.8-3.5 1.8.6-3.8-2.8-2.8z"/>
      </svg>
      <span class="sr-only">{{ get_bloginfo('name', 'display') }}</span>
    </a>
    <button
    class="navbar-toggler"
    id="menu-button"
    type="button" 
    data-target="#topnavbar" 
    aria-controls="topnavbar" 
  >
  Menu
  <span class="menu-btn__cross"></span>
  <span class="menu-btn__hole"></span>  
  </button>
    <nav class="navigation-menu" id="topnavbar">
      <!--<div class="navigation-bg one"></div>
      <div class="navigation-bg two"></div>-->
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu($primarymenu) !!}
      @endif
    </nav>
  </div>
</header>
