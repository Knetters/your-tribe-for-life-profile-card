<script>
    import Taskbar from "$lib/taskbar.svelte";
    import Icon from "$lib/icon.svelte";
    import Terminal from "../lib/terminal.svelte";
</script>

<main id="main-view">
    <!-- Taskbar at the top of the page -->
    <Taskbar/>
    <!-- Icon of the terminal -->
    <Icon/>
    <!-- The terminal panel -->
    <Terminal/>
</main>