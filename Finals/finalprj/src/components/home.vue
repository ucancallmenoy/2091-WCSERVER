<template>
    <div class="home">

        <div class = "row">
        <div class="stoicism left"> 
        <h3>"STOICISM"</h3>
        <p>“The endurance of pain or hardship without the display of feelings and without complaint”</p>
        </div>
        <div class="stoicism right">
        <img id="marcus" src="https://thestoicpath.files.wordpress.com/2023/03/1_czbjcyfhjhdy58ddhov9fq.jpeg?w=1024">
        </div>

        <div class = "intro">
            <div class = "introduction" style="background-color:#aaa;">
                <h1>Introduction to Stoicism</h1>
                <h2>300 B.C.E</h2>
                <p>Stoicism originated as a Hellenistic philosophy, founded in Athens by Zeno of Citium (modern day Cyprus), c. 300 B.C.E. It was influenced by Socrates and the Cynics, and it engaged in vigorous debates with the Skeptics, the Academics, and the Epicureans. The name comes from the “Stoa Poikile“, or painted porch, an open market in Athens where the original Stoics used to meet and teach philosophy. Stoicism moved to Rome where it flourished during the period of the Empire, alternatively being persecuted by Emperors who disliked it and openly embraced by Emperors who attempted to live by it.</p>
            </div>
            <div class="introduction" style="background-color:#bbb;height:346px;">
                <h2>Origin of Stoicism</h2>
                <p>Stoicism is a school of philosophy which first emerged during ancient Greek and Roman times. It was a wise and practical school of thought that focused on living in the moment, and accepting what life has to throw at you without judgement or fear. Although the origins of Stoicism are ancient, it still has much to teach us about living our best life today. The great contemporary historian and archaeologist Paul Veyne summed it up neatly when he wrote: “Stoicism is not so much an ethic as it is a paradoxical recipe for happiness.” Here’s our handy breakdown on the origins of the age-old philosophy.</p>
            </div>
        </div>
        
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style coped>
.row{
    content: ""; display: table; clear:both;
}
.stoicism{
    margin-top:25px;
    float: left;
    padding: 10px;
}
.right{width: 50%; height: -25px;}
.left{width: 35%;margin-top: 200px;}

.intro{
    content:"";
    display:table;
    clear:both;
}
.introduction{
    float: left;
    width:50%;
    padding: 25px;
}

</style>