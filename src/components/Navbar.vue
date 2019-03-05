<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary mb-5">
        <div class="container">
            <router-link class="navbar-brand" to="/">Pokedex</router-link>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link active" to="/">Home</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/search">Search</router-link>
                </li>
            </ul>   
        </div>
    </nav>
</template>
