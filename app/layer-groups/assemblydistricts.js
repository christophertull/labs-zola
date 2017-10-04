import adminBoundaryStyles from '../helpers/admin-boundary-styles';

const { paint, layout, labelLayout } = adminBoundaryStyles;

export default {
  id: 'assemblydistricts',
  title: 'New York State Assembly Districts',
  legendColor: '#8A76F5',
  visible: false,
  layers: [
    {
      layer: {
        id: 'assemblydistricts-line-glow',
        type: 'line',
        source: 'admin-boundaries',
        'source-layer': 'ny-assembly-districts',
        paint: {
          'line-color': '#8A76F5',
          'line-opacity': 0.2,
          'line-width': {
            stops: [
              [11, 3],
              [16, 6],
            ],
          },
        },
      },
    },
    {
      layer: {
        id: 'assemblydistricts-line',
        type: 'line',
        source: 'admin-boundaries',
        'source-layer': 'ny-assembly-districts',
        paint: paint.lines,
        layout: layout.lines,
      },
    },
    {
      layer: {
        id: 'assemblydistricts-label',
        type: 'symbol',
        source: 'admin-boundaries',
        'source-layer': 'ny-assembly-districts',
        minzoom: 10,
        paint: paint.labels,
        layout: labelLayout('assemdist'),
      },
    },
  ],
};
