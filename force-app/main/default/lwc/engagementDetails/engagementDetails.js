import { LightningElement, track } from 'lwc';

export default class EngagementDetails extends LightningElement {
    @track sortCoulmns = {
        nameDesc: false,
        typeDesc: false,
        dateDesc: false,
        sentByDesc: false,
    };

    asc = false;
    //desc = false;

    @track engagements = [
        {
            id: 1,
            type: 'Email Blast',
            name: 'The enablement cloud',
            date: 'Sept 23, 2022',
            sentBy: 'GG',
            areDetailsVisible: false,
            className: "crmabe-engagement_datagrid_row_cols"
        },
        {
            id: 2,
            type: 'Meeting',
            name: 'SilverTower + ACME | Connect',
            date: 'Jan 21, 2022',
            sentBy: 'VG',
            areDetailsVisible: false,
            className: "crmabe-engagement_datagrid_row_cols"
        },
        {
            id: 3,
            type: 'Email',
            name: 'Sync on next steps | SilverTower',
            date: 'Sept 20, 2022',
            sentBy: 'TS',
            areDetailsVisible: false,
            className: "crmabe-engagement_datagrid_row_cols"
        },
        {
            id: 4,
            type: 'LiveSocial Post',
            name: 'News as Service',
            date: 'Sept 20, 2022',
            sentBy: 'WA',
            areDetailsVisible: false,
            className: "crmabe-engagement_datagrid_row_cols"
        }
    ];

    handleChange(event) {
        const data = this.engagements.find(a => a.id == event.currentTarget.dataset.id);
        data.areDetailsVisible = !data.areDetailsVisible;
        data.className = data.areDetailsVisible ? "crmabe-engagement_datagrid_row_cols crmabe-engagement_datagrid_row_cols-selected" : "crmabe-engagement_datagrid_row_cols";
    }

    sortBy(event) {
        const column = event.currentTarget.dataset.column;
        console.info('Received sort event for', column);

        this.sortCoulmns[`${column}Desc`] = !this.sortCoulmns[`${column}Desc`];

        this.asc = !this.sortCoulmns[`${column}Desc`];
        //this.namedesc = !this.nameasc;

        console.info('this.asc', this.asc);
        // console.info('this.nameasc', this.nameasc);
        // console.info('this.namedesc', this.namedesc);

        this.engagements.sort((a, b) => {
            let x = (this.asc ? a[`${column}`] : b[`${column}`]).toLowerCase();
            let y = (this.asc ? b[`${column}`] : a[`${column}`]).toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        });

        console.info('this.engagements after sort', this.engagements);
    }
}