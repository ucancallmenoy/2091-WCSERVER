<template>
    <div class="blog">
    <h1 style="font-family:Monospace;margin-top:50px;">The Path of Stoic: An Ancient Guide to Good Life</h1>
        <div class="first">
        <div class="row">
            <div class="column left">
                <p>It’d be wonderful if life never tempted you, if you could just go day-to-day, winging it and always do right. But that’s not how the world is. That’s not who you are. If left to our own devices, with enough opportunities, eventually we’ll mess up—we’ll drift, we’ll stray.</p>
                <p>That is why the greats have what Marcus Aurelius called “epithets for the self” or what General Mattis has called “flat-ass rules.” Know what you stand for and stick to it, he said. Draw the line and hold it.</p>
                <p>The Stoic Path is a collection of the wisdom of Epictetus, one of the greatest Stoic philosophers of antiquity. Hastings Crossley translated the original text from Greek and compiled Epictetus’s most potent wisdom to create an accessible, compelling distillation of stoic thought.</p>

            </div>
            <div class="column">
                <img src="https://thestoicpath.files.wordpress.com/2023/03/marcusaureliusdailystoic-scaled-1.jpg?w=689">
            </div>
        </div>

        <h1 style="font-family:Monospace;margin-top:120px;">Walk the Path of Stoic</h1>

        <div class = "path">
            <div class="column">
                <h3>Focus on what you can control</h3>
                <p>When we focus on what we can control, our thoughts empower us and then trigger positive emotions. Focus is so important since it is the gateway to all thinking: perception, memory, learning, reasoning, problem solving, and decision making. Without good focus , all aspects of your ability to think will suffer. “If you can’t focus effectively, you can’t think effectively.”</p>
            </div>
            <div class="column">
                <h3>Make beautiful choices</h3>
                <p>Epictetus said that the root of beauty was beautiful choices. “If your choices are beautiful,” he said, “so too will you be.” It’s simple and it’s true.</p>
                <p>You are what your choices make you, nothing more and nothing less. So make good choices today. Little ones and big ones: what you eat, how you talk to people, whether to watch TV or pick up a book, how you do your work, what you choose to think about.</p>
            </div>
            
            <div class="column">
                <h3>Treat Success and Failure the same</h3>
                <p>Never let success get to your head; never let failure get to your heart. Success is not final, failure is not fatal. Success cannot come without failure. True success comes from perseverance and endurance, embracing failure and taking something positive from every failure.</p>
                <p>Success is good but failure is better.</p>
            </div>
            <div class="column">
                <h3>Never let anger get to you</h3>
                <p>One of the most famous Stoic slogans says that: Anger does us more harm than the things about which we're angry. We eat our own hearts when we give in to anger, as philosophers used to say. It's self-destructive. The consequences of our anger might harm others but we also harm ourselves.</p>
            </div>

        </div>
            

        </div>

    </div>
</template>

<script>
export default {
    name:'blog',
    data (){
        return{
            title: 'Blog'
        }
    }
}
</script>
<style coped>
.row{
    content: ""; display: table; clear:both;
}
.column{
    margin-top:25px;
    float: left;
    padding: 10px;
    width: 50%;
    
}
.left{margin-top: 100px;}
.path{
    background-color: gray;
}
</style>