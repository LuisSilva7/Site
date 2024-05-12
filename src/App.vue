<template>
  <router-view/>
</template>

<script>

export default {
  created() {
    if (!localStorage.getItem('proposedIniciatives'))
      localStorage.setItem('proposedIniciatives', JSON.stringify([]))

    if (!localStorage.getItem('proposedCollaborators'))
    localStorage.setItem('proposedCollaborators', JSON.stringify([]))

    if (!localStorage.getItem('backofficeEmails'))
    localStorage.setItem('backofficeEmails', JSON.stringify(['lmpsilva8@gmail.com']))

    if(!localStorage.getItem('materials'))
    localStorage.setItem('materials', JSON.stringify([]))

    if(!localStorage.getItem('collaborators'))
    localStorage.setItem('collaborators', JSON.stringify([]))

    if(!localStorage.getItem('iniciatives'))
    localStorage.setItem('iniciatives', JSON.stringify([]))
  }
}
</script>