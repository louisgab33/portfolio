<script lang="ts">
const navBtns = [
    { name: 'All Contacts', active: true },
    { name: 'All iCloud', title: 'iCloud' },
    { name: 'All on My Mac', title: 'On My Mac' },
]
const contactList = [
    { name: 'Louis Gabillet', mobile: '+33 7 85 21 03 66', mail: 'gabillet.louis@gmail.com', note: '', self: true },
]

let search: string = '';
$: searchedContact = contactList.filter(contact => contact?.name?.toLowerCase()?.includes(search?.toLowerCase()));

let contactName: string = 'Louis Gabillet';
$: contactInfo = contactList.find(contact => contact.name === contactName) ?? contactList[0];
$: ({name, mobile, mail, note, self} = contactInfo);
</script>

<div class="container">
    <nav>
        {#each navBtns as btn}
            {#if btn?.title}
               <h5>{btn.title}</h5> 
            {/if}
           <button class="{btn?.active ? 'active' : ''}">{btn.name}</button> 
        {/each}
    </nav>
    <div class="contact-list">
        <input type="text" bind:value={search}>
        {#each searchedContact as contact}
           <button class="{contact?.name === contactName ? 'active' : ''} {self ? 'flex-btw' : ''}" on:click={() => contactName = contact.name}>{contact.name}<i>􀉭</i></button> 
        {/each}
    </div>
    <div class="contact-page">
        {#if contactInfo}
            <div class="overflow">
                <div class="flex">
                    <div class="pp">
                        <span>{name?.split('')[0]?.toUpperCase()}</span>
                    </div>
                    <h2>{name}</h2>
                </div>
                <div class="flex">
                    <div class="contact-btn {mobile ? 'activated' : ''}">
                        <a href="sms:{mobile}">􀌥</a>
                        <p>message</p>
                    </div>
                    <div class="contact-btn {mobile ? 'activated' : ''}">
                        <a href="tel:{mobile}">􀌿</a>
                        <p>call</p>
                    </div>
                    <div class="contact-btn">
                        <a href="/">􀍊</a>
                        <p>FaceTime</p>
                    </div>
                    <div class="contact-btn {mail ? 'activated' : ''}">
                        <a href="mailto:{mail}">􀍖</a>
                        <p>mail</p>
                    </div>
                </div>
                <div class="info">
                    <div class="flex line">
                        <p class="subtitle">mobile</p>
                        {#if mobile}
                            <p>{mobile}</p>
                        {/if}
                    </div>
                    <div class="flex line">
                        <p class="subtitle">FaceTime</p>
                        <i>􀍊</i>
                        <a href="/" class="{mobile ? 'activated' : ''}">􀌿</a>
                    </div>
                    <div class="flex line">
                        <p class="subtitle">note</p>
                        {#if note}
                            <p>{note}</p>
                        {/if}
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
.container {
    height: 100%;
    display: grid;
    grid-template-columns: 7rem 7rem 1fr;
}
h2 {
    font-size: calc(var(--font-size) + 4px);
}
h5 {
    font-size: calc(var(--font-ratio) - 2px);
    margin-block: .5rem .25rem;
}
h5, i {
    color: #7C7C7C;
}
a {
    text-decoration: none;
    cursor: default;
    pointer-events: none;
}
input {
    width: 100%;
    font-size: var(--font-ratio);
    border: none;
    outline: none;
    padding: 2px;
    background: grey;
    border-radius: 2px;
    margin-bottom: 15px;
}
button {
    background: transparent;
    border: none;
    outline: none;
    padding: 2px 4px;
    border-radius: 2px;
    text-align: start;
}
.active {
    background: #7C7C7C;
}
.pp {
    background: #7C7C7C;
    border-radius: 50%;
    display: grid;
    place-content: center;
    font-size: 1.25rem;
    margin-right: 5px;
    padding: 5px;
}
.pp span {
    font-size: calc(var(--font-size) * 2.5);
    aspect-ratio: 1/1;
    text-align: center;
}
nav .active {
    background: var(--dark-selection-focused);
}
.active i {
    color: white;
}
.activated p, .activated {
    color: #0A82FF;
}
.flex-btw {
    display: flex;
    justify-content: space-between;
}
.flex {
    display: flex;
    align-items: center;
    gap: 4px;
}
.info {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.contact-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin-inline: 4px;
    color: #3D3C39;
}
.contact-btn a {
    background: #3D3C39;
    color: #7C7C7C;
    padding: calc(var(--font-size) / 2);
    border-radius: 50%;
    aspect-ratio:  1/1;
    display: grid;
    place-content: center;
}
.activated a {
    color: white;
    background: var(--dark-selection-focused);
    pointer-events: auto;
}
.contact-list button {
    padding: 4px 4px;
}
.line {
    border-bottom: 0.03px solid #7C7C7C59;
    padding: 2px 0;
}
.line:last-of-type {
    align-items: flex-start;
    border: none;
    height: 100%;
}
.subtitle {
    text-align: end;
    width: 40%;
    color: #7C7C7C
}
nav {
    width: 100%;
    height: 100%;
    background: var(--dark-fullscreen);
    backdrop-filter: blur(var(--blur));
}
nav, .contact-page, .contact-list, .container, button, .info {
    width: 100%;
}
nav, .contact-list {
    border-right: 1px solid black;
    padding: var(--nav-height) 5px 5px 5px;
}
.contact-list, .contact-page {
    height: 100%;
    background: #21211F;
}
.contact-page {
    overflow: scroll;
    position: relative;
}
.overflow {
    padding: calc(var(--nav-height) / 2) 10px 10px 10px;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(var(--font-size) * 1.5);
}
.contact-page p, .contact-page, .contact-page a {
    font-size: var(--font-size);
}
.contact-list button:focus {
    background: var(--dark-selection-focused);
}
.contact-list button:focus i {
    color: white
}
</style>
