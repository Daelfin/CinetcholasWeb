import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>filmes works!</p>`,
  styleUrl: './filmes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmesComponent { }
