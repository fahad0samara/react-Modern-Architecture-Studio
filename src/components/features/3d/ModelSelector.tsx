import React from 'react';
import { Building } from 'lucide-react';

interface Model {
  id: number;
  name: string;
  url: string;
}

interface ModelSelectorProps {
  models: Model[];
  activeModel: Model;
  onSelect: (model: Model) => void;
}

export function ModelSelector({ models, activeModel, onSelect }: ModelSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-4">Available Models</h3>
      {models.map((model) => (
        <button
          key={model.id}
          onClick={() => onSelect(model)}
          className={`w-full p-4 rounded-lg text-left transition-colors ${
            activeModel.id === model.id
              ? 'bg-white text-gray-900'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          <div className="flex items-center">
            <Building className="h-5 w-5 mr-3" />
            <h4 className="font-medium">{model.name}</h4>
          </div>
        </button>
      ))}
    </div>
  );
}