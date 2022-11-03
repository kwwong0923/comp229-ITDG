<% if(!user){ %> 
    <li class="nav-item">
      <a class="nav-link" href="/auth/login">User Login</a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link" href="/auth/signup">Register</a>
    </li>
    <% } else {%>
    <li class="nav-item">
      <a class="nav-link" href="/auth/logout">Logout</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/profile">Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/survey/create">Create Survey</a>
    </li>
    <% } %>