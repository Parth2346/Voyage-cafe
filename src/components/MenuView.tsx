import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { Search, Plus, X, Sparkles, Filter, Check, Star } from 'lucide-react';

export default function MenuView() {
  const [menuList, setMenuList] = useState<MenuItem[]>(MENU_ITEMS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Custom item state
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemPrice, setNewItemPrice] = useState<string>('');
  const [newItemDesc, setNewItemDesc] = useState<string>('');
  const [newItemCategory, setNewItemCategory] = useState<string>('breakfast');
  const [newItemSubCategory, setNewItemSubCategory] = useState<string>('');
  const [newItemTag, setNewItemTag] = useState<string>('');
  const [formError, setFormError] = useState<string>('');
  const [addSuccess, setAddSuccess] = useState<boolean>(false);

  const categories = [
    { value: 'all', label: 'All Selection' },
    { value: 'breakfast', label: 'Breakfast & Eggs' },
    { value: 'appetizers', label: 'Appetizers & Sandwiches' },
    { value: 'mains', label: 'Mains & Bowls' },
    { value: 'soups_salads', label: 'Soups & Salads' },
    { value: 'desserts', label: 'Desserts & Bowls' },
    { value: 'beverages', label: 'Beverages' }
  ];

  // Filtering logic
  const filteredItems = menuList.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.subCategory && item.subCategory.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  // Group filtered items by subcategory
  const groupedItems: { [key: string]: { subtext?: string; items: MenuItem[] } } = {};
  filteredItems.forEach(item => {
    const sub = item.subCategory || 'Other Selections';
    if (!groupedItems[sub]) {
      groupedItems[sub] = {
        subtext: item.subtext,
        items: []
      };
    }
    groupedItems[sub].items.push(item);
  });

  // Subcategory ordering for aesthetic flow
  const subCategoryOrder = [
    'Voyage Eggs', 'Benedicts', 'Voyage Breakfast Board', 'All Day Breakfast', 'Open Toasties / Tartines',
    'Appetizing Morsels', 'Panini Sandwich', 'Burgers',
    'Meal Bowls', 'The Voyage Special Steaks', 'Thin Crust Pizzas', 'Pastas', 'Keto',
    'Homemade Soups', 'Farm Fresh Salads',
    'Smoothie Bowls', 'Desserts',
    'Hot Coffees', 'Iced Coffees', 'Cold Brews', 'Specialty Tea', 'Shakes', 'Mocktail & Iced Teas', 'Fresh Fruit Juices & Coolers'
  ];

  const sortedSubCategories = Object.keys(groupedItems).sort((a, b) => {
    const indexA = subCategoryOrder.indexOf(a);
    const indexB = subCategoryOrder.indexOf(b);
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!newItemName || !newItemPrice || !newItemDesc) {
      setFormError('Please fill out all required fields.');
      return;
    }

    const priceNum = parseFloat(newItemPrice);
    if (isNaN(priceNum) || priceNum <= 0) {
      setFormError('Please enter a valid positive number for price.');
      return;
    }

    const createdItem: MenuItem = {
      id: `custom-${Date.now()}`,
      name: newItemName,
      price: priceNum,
      description: newItemDesc,
      category: newItemCategory,
      subCategory: newItemSubCategory || undefined,
      tags: newItemTag ? newItemTag.split(',').map(t => t.trim().toUpperCase()) : undefined
    };

    setMenuList([createdItem, ...menuList]);
    setNewItemName('');
    setNewItemPrice('');
    setNewItemDesc('');
    setNewItemSubCategory('');
    setNewItemTag('');
    setAddSuccess(true);
    
    setTimeout(() => {
      setAddSuccess(false);
      setShowAddForm(false);
    }, 1500);
  };

  // Icon / Indicator renderer for food preferences
  const renderTagIndicator = (tag: string) => {
    switch (tag) {
      case 'VE':
        return (
          <span className="inline-flex items-center gap-1 border border-emerald-600/30 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider" title="Vegetarian">
            <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
            VE
          </span>
        );
      case 'NV':
        return (
          <span className="inline-flex items-center gap-1 border border-rose-600/30 bg-rose-50 text-rose-700 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider" title="Non-Vegetarian">
            <span className="w-1.5 h-1.5 bg-rose-600 rounded-full" />
            NV
          </span>
        );
      case 'VG':
        return (
          <span className="inline-flex items-center gap-1 border border-teal-600/30 bg-teal-50 text-teal-700 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider" title="Vegan">
            🌱 VG
          </span>
        );
      case 'GF':
        return (
          <span className="inline-flex items-center gap-1 border border-amber-600/30 bg-amber-50 text-amber-800 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider" title="Gluten-Free">
            🌾 GF
          </span>
        );
      case 'VS':
        return (
          <span className="inline-flex items-center gap-1 border border-yellow-600 bg-amber-100 text-amber-900 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm" title="Voyage Special">
            <Star className="h-2.5 w-2.5 fill-amber-700 stroke-amber-700" />
            VS
          </span>
        );
      default:
        return (
          <span className="bg-brand-brown-light/10 text-brand-brown-light font-sans text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            {tag}
          </span>
        );
    }
  };

  return (
    <div className="w-full pt-32 pb-24 bg-brand-cream">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-beige block mb-3">
            Handcrafted & Mindfully Sourced
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown tracking-tight">
            The Voyage Cafe Menu
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
          
          {/* Quick Menu Legends */}
          <div className="flex flex-wrap justify-center gap-3 mt-6 text-[11px] font-sans text-brand-brown/60">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 border border-emerald-600 flex items-center justify-center"><span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" /></span> VE - Vegetarian</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 border border-rose-600 flex items-center justify-center"><span className="w-1.5 h-1.5 bg-rose-600 rounded-full" /></span> NV - Non-Vegetarian</span>
            <span className="flex items-center gap-1">🌱 VG - Vegan</span>
            <span className="flex items-center gap-1">🌾 GF - Gluten-Free</span>
            <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-amber-500 stroke-amber-600" /> VS - Voyage Special</span>
          </div>
        </div>

        {/* Search and Action Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-10 w-full">
          {/* Search box */}
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-950/40" />
            <input 
              type="text"
              placeholder="Search with declarations, dish names or types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-cream-dark border border-brand-gold rounded-full py-3.5 pl-11 pr-5 text-sm font-sans focus:outline-none focus:border-brand-beige/50 focus:ring-1 focus:ring-brand-beige/30 transition-all placeholder:text-brand-brown/40"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-brand-brown transition-colors cursor-pointer"
              >
                <X className="h-4 w-4 text-brand-brown/40" />
              </button>
            )}
          </div>

          {/* Suggest item button */}
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-brown-light text-white font-sans text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-brand-brown hover:scale-105 transition-all duration-300 shadow-[0_5px_15px_rgba(39,19,16,0.1)] cursor-pointer"
          >
            {showAddForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {showAddForm ? 'Close Form' : 'Add Item Request'}
          </button>
        </div>

        {/* Suggest Item Drawer Form */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mb-12 bg-brand-cream-dark rounded-2xl border border-brand-gold shadow-[0_15px_30px_rgba(90,90,64,0.05)] p-6 md:p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-brand-brown-light" />
                <h3 className="font-serif text-xl font-bold text-brand-brown">Suggest a Custom Selection</h3>
              </div>

              {addSuccess ? (
                <div className="flex flex-col items-center justify-center py-6 text-emerald-600 gap-2">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100">
                    <Check className="h-6 w-6" />
                  </div>
                  <span className="font-sans text-sm font-semibold">Custom item successfully added to the menu!</span>
                </div>
              ) : (
                <form onSubmit={handleAddItem} className="space-y-4">
                  {formError && (
                    <div className="text-xs text-rose-500 font-semibold bg-rose-50 p-3 rounded-lg border border-rose-100">
                      {formError}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-brown/70 uppercase tracking-widest mb-1.5">Item Name *</label>
                      <input 
                        type="text"
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                        placeholder="e.g. I AM TRANQUIL (Rose Lavender Tea)"
                        className="w-full bg-brand-cream border border-brand-gold rounded-lg p-3 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-brown/70 uppercase tracking-widest mb-1.5">Price (₹ INR) *</label>
                      <input 
                        type="text"
                        value={newItemPrice}
                        onChange={(e) => setNewItemPrice(e.target.value)}
                        placeholder="e.g. 250"
                        className="w-full bg-brand-cream border border-brand-gold rounded-lg p-3 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-brown/70 uppercase tracking-widest mb-1.5">Main Category *</label>
                      <select
                        value={newItemCategory}
                        onChange={(e) => setNewItemCategory(e.target.value)}
                        className="w-full bg-brand-cream border border-brand-gold rounded-lg p-3 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40"
                      >
                        <option value="breakfast">Breakfast & Eggs</option>
                        <option value="appetizers">Appetizers & Sandwiches</option>
                        <option value="mains">Mains & Bowls</option>
                        <option value="soups_salads">Soups & Salads</option>
                        <option value="desserts">Desserts & Bowls</option>
                        <option value="beverages">Beverages</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-brown/70 uppercase tracking-widest mb-1.5">Sub Category</label>
                      <input 
                        type="text"
                        value={newItemSubCategory}
                        onChange={(e) => setNewItemSubCategory(e.target.value)}
                        placeholder="e.g. Smoothie Bowls"
                        className="w-full bg-brand-cream border border-brand-gold rounded-lg p-3 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-brown/70 uppercase tracking-widest mb-1.5">Legends (Comma separated)</label>
                      <input 
                        type="text"
                        value={newItemTag}
                        onChange={(e) => setNewItemTag(e.target.value)}
                        placeholder="e.g. VE, VS, GF"
                        className="w-full bg-brand-cream border border-brand-gold rounded-lg p-3 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-brown/70 uppercase tracking-widest mb-1.5">Description *</label>
                    <textarea 
                      rows={3}
                      value={newItemDesc}
                      onChange={(e) => setNewItemDesc(e.target.value)}
                      placeholder="e.g. Infused with handpicked organic roses and lavender blooms..."
                      className="w-full bg-brand-cream border border-brand-gold rounded-lg p-3 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button 
                      type="button" 
                      onClick={() => setShowAddForm(false)}
                      className="px-5 py-2.5 rounded-full border border-brand-gold font-sans text-xs font-semibold uppercase tracking-wider text-brand-brown/70 hover:bg-brand-cream transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="px-6 py-2.5 rounded-full bg-brand-brown-light text-white font-sans text-xs font-semibold uppercase tracking-wider hover:bg-brand-brown transition-all cursor-pointer"
                    >
                      Add Selection
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-16">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`font-sans text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full transition-all duration-300 cursor-pointer
                  ${isSelected 
                    ? 'bg-brand-brown-light text-white shadow-md scale-105' 
                    : 'bg-brand-cream-dark border border-brand-gold text-brand-brown/70 hover:border-brand-brown-light/40 hover:text-brand-brown-light'
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items List Grouped by Subcategories */}
        <div className="space-y-16">
          {sortedSubCategories.length > 0 && sortedSubCategories.some(sub => groupedItems[sub].items.length > 0) ? (
            sortedSubCategories.map((subCategoryName) => {
              const subCategoryData = groupedItems[subCategoryName];
              if (!subCategoryData || subCategoryData.items.length === 0) return null;

              return (
                <div key={subCategoryName} className="relative">
                  {/* Subcategory Header Block */}
                  <div className="border-b border-brand-gold/30 pb-3 mb-8">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-brown">
                      {subCategoryName}
                    </h2>
                    {subCategoryData.subtext && (
                      <p className="text-xs md:text-sm font-sans italic text-brand-brown-light/80 mt-1 max-w-2xl">
                        {subCategoryData.subtext}
                      </p>
                    )}
                  </div>

                  {/* Grid or List of Items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <AnimatePresence mode="popLayout">
                      {subCategoryData.items.map((item) => {
                        const hasVegNonVegPrices = item.priceVeg !== undefined && item.priceNonVeg !== undefined;
                        
                        return (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col justify-between group h-full"
                          >
                            <div>
                              {/* Title and Price line */}
                              <div className="flex justify-between items-baseline gap-2 mb-2">
                                <span className="font-serif text-lg md:text-xl font-bold text-brand-brown group-hover:text-brand-brown-light transition-colors duration-300">
                                  {item.name}
                                </span>
                                <span className="flex-grow border-b border-dotted border-brand-beige/30 mx-2 h-1 min-w-[20px]" />
                                <span className="font-serif text-base md:text-lg font-bold text-brand-brown shrink-0">
                                  {hasVegNonVegPrices ? (
                                    <span className="text-xs font-sans text-brand-brown-light/90">
                                      Veg ₹{item.priceVeg} / NV ₹{item.priceNonVeg}
                                    </span>
                                  ) : (
                                    `₹${item.price}`
                                  )}
                                </span>
                              </div>

                              {/* Description */}
                              <p className="font-sans text-xs md:text-sm text-brand-brown/70 leading-relaxed text-left mb-3">
                                {item.description}
                              </p>
                            </div>

                            {/* Tags / Indicators Row */}
                            {item.tags && item.tags.length > 0 && (
                              <div className="flex gap-1.5 flex-wrap">
                                {item.tags.map(tag => (
                                  <React.Fragment key={tag}>
                                    {renderTagIndicator(tag)}
                                  </React.Fragment>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-brand-cream-dark rounded-3xl p-12 text-center border border-brand-gold shadow-sm">
              <Filter className="h-8 w-8 text-brand-brown/20 mx-auto mb-3" />
              <p className="font-serif text-lg text-brand-brown/60">No items match your search or filter.</p>
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-brown-light hover:text-brand-brown mt-2 underline underline-offset-4 cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
