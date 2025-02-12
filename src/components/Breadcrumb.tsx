import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Define the route mapping for breadcrumb labels
const routeLabels: { [key: string]: string } = {
  '': 'Home',
  'sejarah': 'Sejarah',
  'visi-misi': 'Visi dan Misi',
  'dekanat': 'Dekanat',
  'struktur-organisasi': 'Struktur Organisasi',
  'program-studi': 'Program Studi',
  'mutu': 'Mutu',
  'mahasiswa': 'Mahasiswa',
  'riset': 'Riset',
  'info': 'Info'
};

// Define parent routes for nested paths
const parentRoutes: { [key: string]: string[] } = {
  'sejarah': ['profile'],
  'visi-misi': ['profile'],
  'dekanat': ['profile'],
  'struktur-organisasi': ['profile']
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Function to get breadcrumb items with parent routes included
  const getBreadcrumbItems = () => {
    const items: { label: string; path: string; isLast: boolean }[] = [];
    let currentPath = '';

    // Add home if we're not on the home page
    if (pathnames.length > 0) {
      items.push({
        label: 'Home',
        path: '/',
        isLast: false
      });
    }

    // Add parent routes if they exist
    if (pathnames.length > 0 && parentRoutes[pathnames[pathnames.length - 1]]) {
      parentRoutes[pathnames[pathnames.length - 1]].forEach(parent => {
        items.push({
          label: routeLabels[parent] || parent,
          path: `/${parent}`,
          isLast: false
        });
      });
    }

    // Add current path items
    pathnames.forEach((name, index) => {
      currentPath += `/${name}`;
      if (!parentRoutes[name]?.includes(name)) { // Don't add if it's a parent route we already added
        items.push({
          label: routeLabels[name] || name,
          path: currentPath,
          isLast: index === pathnames.length - 1
        });
      }
    });

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  if (breadcrumbItems.length === 0) return null;

  return (
    <div className="container px-6 py-4">
      <div className="flex items-center space-x-2 text-white/80 text-sm">
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.path}>
            {index > 0 && <span className="text-white/60">/</span>}
            {item.isLast ? (
              <span className="text-white">{item.label}</span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;