<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

    <div class="container">
        <span class="row">
            <h3 style="color: black;">All Status</h3>
            <h3>On Progress</h3>
            <h3>Pending</h3>
            <h3>Closed</h3>
        </span>

        <v-project-card v-for="project in projects" :key="project.title"
            :code="project.code"
            :title="project.title"
            :date="project.date"
            :clientAvatar="project.clientAvatar"
            :clientName="project.clientName"
            :chargerAvatar="project.chargerAvatar"
            :chargerName="project.chargerName"
            :day="project.day"
            :deadlineDate="project.deadlineDate"
            :tagTitle="project.tagTitle"
            :tagColor="project.tagColor"
            :tagBackground="project.tagBackground"
        />
    </div>

</template>

<script>
    import vProjectCard from '../ProjectCard.vue'

    export default {
        components: {
            vProjectCard
        },

        data() {
            return {
                projects: [
                    {
                        code: '#P-000441425',
                        title: 'Redesign Owlio Landing Page Web..',
                        date: 'Sep 8th, 2020',
                        clientAvatar: 'src/components/assets/avatar-1.png',
                        clientName: 'James Jr.',
                        chargerAvatar: 'src/components/assets/avatar-2.png',
                        chargerName: 'Marley Dokidis',
                        day: 'Tuesday',
                        deadlineDate: 'Sep 29th 2020',
                        tagTitle: 'PENDING',
                        tagColor: '#ffaa2b',
                        tagBackground: '#fff3e1'
                    },{
                        code: '#P-000441425',
                        title: 'Create UseCase Diagram of Fillow..',
                        date: 'Sep 8th, 2020',
                        clientAvatar: 'src/components/assets/avatar-3.png',
                        clientName: 'Jakob Vetrovs',
                        chargerAvatar: 'src/components/assets/avatar-4.png',
                        chargerName: 'Roger Schleifer',
                        day: 'Monday',
                        deadlineDate: 'Sep 26th 2020',
                        tagTitle: 'ON PROGRESS',
                        tagColor: '#26b0ff',
                        tagBackground: '#e4f5ff'
                    },{
                        code: '#P-000441425',
                        title: 'Reduce Website Page Size Omah',
                        date: 'Sep 8th, 2020',
                        clientAvatar: 'src/components/assets/avatar-5.png',
                        clientName: 'Alena Culhance',
                        chargerAvatar: 'src/components/assets/avatar-6.png',
                        chargerName: 'Maren Levin',
                        day: 'Tuesday',
                        deadlineDate: 'Sep 29th 2020',
                        tagTitle: 'CLOSED',
                        tagColor: '#0abd3d',
                        tagBackground: '#defee7'
                    },{
                        code: '#P-000441425',
                        title: 'Manage SEO for Eclan Company P..',
                        date: 'Sep 8th, 2020',
                        clientAvatar: 'src/components/assets/avatar-7.png',
                        clientName: 'Makenna Berg',
                        chargerAvatar: 'src/components/assets/avatar-8.png',
                        chargerName: 'Cheyenne Watt',
                        day: 'Tuesday',
                        deadlineDate: 'Sep 29th 2020',
                        tagTitle: 'ON PROGRESS',
                        tagColor: '#26b0ff',
                        tagBackground: '#e4f5ff'
                    },{
                        code: '#P-000441425',
                        title: 'Redesign Kripton Mobile App',
                        date: 'Sep 8th, 2020',
                        clientAvatar: 'src/components/assets/avatar-9.png',
                        clientName: 'Marley Geidt',
                        chargerAvatar: 'src/components/assets/avatar-10.png',
                        chargerName: 'Davis Siphron',
                        day: 'Tuesday',
                        deadlineDate: 'Sep 29th 2020',
                        tagTitle: 'PENDING',
                        tagColor: '#ffaa2b',
                        tagBackground: '#fff3e1'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .container {
        padding: 20px;
        height: calc(100% - 90px);
        box-sizing: border-box;
        overflow-y: scroll;
    }
    .row {
        display: flex;
        gap: 25px;
        margin: 20px;
    }
    h3 {
        margin: 0;
        color: #777;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
    }
</style>