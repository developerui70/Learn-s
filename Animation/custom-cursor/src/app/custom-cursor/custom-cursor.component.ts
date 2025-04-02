import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-custom-cursor',
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.scss']
})
export class CustomCursorComponent implements AfterViewInit {
  @ViewChild('cursor') cursor: ElementRef | undefined;
  @ViewChild('container', { static: true }) container: ElementRef | undefined;
  private mouseX = 0;
  private mouseY = 0;
  el: any;

  ngAfterViewInit(): void {
    const cursorElement = this.cursor?.nativeElement;
    const cursorScaleElements = this.el.nativeElement.querySelectorAll('.cursor-scale');

    gsap.to({}, 0.16, {
      repeat: -1,
      onRepeat: () => {
        gsap.set(cursorElement, {
          css: {
            left: this.mouseX,
            top: this.mouseY
          }
        });
      }
    });

    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    cursorScaleElements.forEach((link: HTMLElement) => {
      link.addEventListener('mouseleave', () => {
        cursorElement.classList.remove('grow');
        cursorElement.classList.remove('grow-small');
      });

      link.addEventListener('mousemove', () => {
        cursorElement.classList.add('grow');
        if (link.classList.contains('small')) {
          cursorElement.classList.remove('grow');
          cursorElement.classList.add('grow-small');
        }
      });
    });
  }
}