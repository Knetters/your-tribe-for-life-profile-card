<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices' 
    export let data
</script>

<!-- <pre>
    Data uit prismic:
    
    {JSON.stringify(data, null, 2)}
</pre> -->

<main id="main-view">
    <div class="task-bar" aria-hidden="true">
        <div class="toolbar-grid">
            <div class="toolbar-grid-buttons">
                <p class="task-bar-labels">Terminal File View Go Window Help</p>
            </div>
            <div class="toolbar-grid-title">
            </div>
            <div class="toolbar-grid-version">
                <p class="date-time-output"><i class="fa fa-wifi"></i> <i class="fa fa-battery-three-quarters"></i> <i class="fa fa-calendar-o"></i> <i class="fa fa-bell-o"></i> <span id="time-field"></span> <span id="date-field"></span></p>
            </div>
        </div>
    </div>

    <div class="row">
        <div id="applicationIcon" class="terminal-application-icon">
            <img class="terminal-icon" src="{data.icon.url}" alt="Terminal icon">
            <h1>Terminal</h1>
        </div>
    </div>

    <section id="terminal" class="terminal">
        <div id="inner-terminal" class="inner-terminal">
            <div class="terminal-toolbar drag-bar" id="terminal-toolbar" aria-hidden="true">
    
                <!-- The buttons an name at the top of the terminal -->
                <div class="toolbar-grid">
                    <div class="toolbar-grid-buttons">
                      <p class="toolbar-buttons"><i id="close" class="fa fa-circle red toolbar-icon"></i><i id="min" class="fa fa-circle yellow toolbar-icon"></i><i id="max" class="fa fa-circle dark-green toolbar-icon"></i></p>
                    </div>
                    <div class="toolbar-grid-title">
                      <p>Terminal (admin)</p>
                    </div>
                    <div class="toolbar-grid-version">
                      <p>⌥⌘</p>
                    </div>
                </div>
            </div>
    
            <div class="terminal-content">
                <!-- Welcome message -->
                
                <!-- Nog ergens een Last login: [datum] regel -->
                <div id="welcome-msg" class="welcome-msg-margin">
                    <p id="text-art" class="text-art-style" aria-hidden="true">Loading...</p>
                    <p class="bottom-spacing">To my digital brain - Type <span class="blue">help</span> for a list of supported commands.</p>
                </div>
    
                <div id="output">
                    <!-- The output of the terminal input generated by the JavaScript -->
                </div>
                <p><span class="blue" aria-hidden="true">~/tmp/users</span> <span class="green" aria-hidden="true">admin </span><span class="red" aria-hidden="true">> </span><input type="text" class="terminal-input" spellcheck="false"></p>
            </div>
        </div>
    </section>
    
</main>
  
<style>
</style>
  