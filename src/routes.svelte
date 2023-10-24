
<script>
    import { Route, Link, Router } from "svelte-routing";
    import Home from "./routes/+page.svelte";
    import login from "./routes/login/+page.svelte";
    import register from "./routes/login/register/+page.svelte";
</script>
  
<Router>
  <Route path="/" component={Home} />
  <Route path="/login" component={login} />
  <Route path="/contact" component={register} />
</Router>

<Link to="/">Home</Link>
<Link to="/login">login</Link>
<Link to="/register">register</Link>