import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sc-peges',
  templateUrl: './peges.component.html',
  styleUrls: ['./peges.component.scss']
})
export class PegesComponent implements OnInit {
  routeLinks: any[];
	activeLinkIndex = -1;

	constructor(private router: Router) {
		this.routeLinks = [
			{
                label: 'Acuse de Recibo',
                link: '/acuse-recibo',
                index: 0
			},
			{
                label: 'Referencias Bancarias',
                link: '/referencias',
                index: 1
			}
		];
	}

	ngOnInit(): void {
		this.router.events.subscribe((res) => {
			this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
		});
    }

}
