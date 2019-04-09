<template>
    <div class="col-6 mb-2 mt-2">
        <div class="card shadow">
            <div class="card-body">
                <h5 class="card-title">{{ track.track.track_name }}</h5>
                <h6 class="card-subtitle text-muted">{{ track.track.album_name }}</h6>
                <p class="card-text">{{ track.track.artist_name }}</p>
                <router-link to="/" class="btn btn-primary btn-block">Get Lyrics</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        track: Object
    }
}
</script>
