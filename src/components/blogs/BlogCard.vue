<template>
    <section style="display: flex; justify-content: space-around;">
        <div style="background-color: whitesmoke;
        margin: 10px; 
        border: 1px solid lightslategrey; 
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-radius: 5px;" 
        v-for="blog in blogs" 
        v-bind:key="blog.id">
            <div style="margin: 10px;">
                <img src="https://picsum.photos/200" alt="Image">
            </div>
            <div style="margin: 5px; ">
                <h2>{{blog.name}}</h2>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, nulla? Enim, et illum doloribus,
                    totam, nemo quo dignissimos distinctio eum cumque ratione dolore! Nobis ad ipsam dicta asperiores nemo
                    mollitia!</p>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    name: 'BlogCard',
    data() {
        return {
            show: true,
            blogs: [
                { id: 1, name: "Ejaaz", desc: "ejaaz@example.com" },
                { id: 2, name: "Ejaaz 1", desc: "ejaaz1@example.com" },
                { id: 3, name: "Ejaaz 2", desc: "ejaaz2@example.com" },
                { id: 4, name: "Ejaaz 3", desc: "ejaaz3@example.com" },
                { id: 5, name: "Ejaaz 4", desc: "ejaaz4@example.com" },
            ],
        }
    }
}
</script>