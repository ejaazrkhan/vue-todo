<template>
    <section class="nav-section">
        <div class="nav-header-section">
            <h1>Menu</h1>
            <img width="30" height="30"
                src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
                alt="">
        </div>
        <div class="search-div">
            <input class="search-input" type="text" placeholder="Search" name="search" id="search-input">
            <span>🔍</span>
        </div>
        <div>
            <h6>TASKS</h6>
            <div class="tasks-div">
                <span class="icon">⤴</span>
                <span>Upcomings</span>
                <span class="float-right task-count">23</span>
            </div>
            <div class="tasks-div">
                <span class="icon">⤴</span>
                <span>Upcomings</span>
                <span class="float-right task-count">23</span>
            </div>
            <div class="tasks-div">
                <span class="icon">⤴</span>
                <span>Upcomings</span>
                <span class="float-right task-count">23</span>
            </div>
            <div class="tasks-div">
                <span class="icon">⤴</span>
                <span>Upcomings</span>
                <span class="float-right task-count">23</span>
            </div>

        </div>
        <hr>
        <div>
            <h6>LISTS</h6>
            <div class="lists-div">
                <span class="list-badge"></span>
                <span>Upcomings</span>
                <span class="float-right list-count">23</span>
            </div>
            <div class="lists-div">
                <span class="list-badge"></span>
                <span>Upcomings</span>
                <span class="float-right list-count">23</span>
            </div>
            <div class="lists-div">
                <span class="list-badge"></span>
                <span>Upcomings</span>
                <span class="float-right list-count">23</span>
            </div>
            <div class="lists-div">
                <span class="list-badge"></span>
                <span>Upcomings</span>
                <span class="float-right list-count">23</span>
            </div>

        </div>
        <hr>
        <div>
            <h6>TAGS</h6>
            <div>
                <span class="tag">Tag 1</span>
                <span class="tag">Tag 2</span>
                <span class="add-tag">+ Add Tag</span>
            </div>
        </div>

        <div class="other-menu-section">
            <div class="other-menu">
                <span class="icon">⚙️</span>
                <span>Settings</span>
            </div>
            <div class="other-menu">
                <span class="icon">↪️</span>
                <span>Signout</span>
            </div>
        </div>


    </section>
</template>

<style>
@import url(../sideNav/SideNav.css);
</style>

<script>

export default {
    name: 'SideNav',
    components: {
    },

}

</script>