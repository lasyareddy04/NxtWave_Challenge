import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Plus, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Send,
  MoreHorizontal
} from 'lucide-react';
import { useCampaign } from '../../context/CampaignContext';
import { CommunityPartner, CommunityStatus } from '../../types/campaign';

export const CommunityTrackerTable: React.FC = () => {
  const { 
    partners, 
    updatePartnerStatus, 
    simulateBatchRegistrations, 
    setActiveSource, 
    setCurrentView,
    setSelectedPartnerForKit,
    showToast
  } = useCampaign();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [channelFilter, setChannelFilter] = useState<string>('ALL');

  const filteredPartners = partners.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.college.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || p.status === statusFilter;
    const matchesChannel = channelFilter === 'ALL' || p.channel === channelFilter;
    return matchesSearch && matchesStatus && matchesChannel;
  });

  const getStatusBadge = (status: CommunityStatus) => {
    switch (status) {
      case 'LIVE':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-800';
      case 'FOLLOW-UP':
        return 'bg-amber-950/80 text-amber-300 border-amber-800';
      case 'INTERESTED':
        return 'bg-blue-950/80 text-blue-300 border-blue-800';
      case 'CONTACTED':
        return 'bg-purple-950/80 text-purple-300 border-purple-800';
      case 'COMPLETED':
        return 'bg-teal-950/80 text-teal-300 border-teal-800';
      case 'NOT STARTED':
      default:
        return 'bg-slate-800 text-slate-400 border-slate-700';
    }
  };

  const handleTestLink = (partner: CommunityPartner) => {
    setActiveSource(partner.sourceSlug);
    setSelectedPartnerForKit(partner.sourceSlug);
    setCurrentView('student');
    showToast(`Switched active link to ${partner.college} (?source=${partner.sourceSlug})`);
  };

  const totalRegisteredFromCampus = partners.reduce((s, p) => s + p.actualRegistrations, 0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              CAMPUS & COMMUNITY DISTRIBUTION TRACKER
            </h3>
            <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-800 px-2 py-0.5 rounded">
              Engine 1: 300 Target (20 × 15)
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Operationally managing 20 campus/community partners across India during the 7-day sprint.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl">
            <span className="text-slate-400">Total Partners: </span>
            <span className="text-white font-bold">{partners.length}</span>
          </div>
          <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl">
            <span className="text-slate-400">Live Campus Regs: </span>
            <span className="text-indigo-400 font-bold">{totalRegisteredFromCampus} / 300</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
          <input
            type="text"
            placeholder="Search by college or club name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex gap-2">
          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-950 text-slate-300 border border-slate-800 rounded-xl px-3 py-2 text-xs outline-none"
          >
            <option value="ALL">All Statuses</option>
            <option value="LIVE">LIVE</option>
            <option value="FOLLOW-UP">FOLLOW-UP</option>
            <option value="INTERESTED">INTERESTED</option>
            <option value="CONTACTED">CONTACTED</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="NOT STARTED">NOT STARTED</option>
          </select>

          {/* Channel filter */}
          <select
            value={channelFilter}
            onChange={(e) => setChannelFilter(e.target.value)}
            className="bg-slate-950 text-slate-300 border border-slate-800 rounded-xl px-3 py-2 text-xs outline-none"
          >
            <option value="ALL">All Channels</option>
            <option value="WhatsApp Group">WhatsApp Group</option>
            <option value="Discord">Discord</option>
            <option value="Club Email">Club Email</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Class CR Network">Class CR Network</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] border-b border-slate-800">
            <tr>
              <th className="py-3 px-4">Community / Club</th>
              <th className="py-3 px-4">College</th>
              <th className="py-3 px-4">Channel</th>
              <th className="py-3 px-4 text-center">Target</th>
              <th className="py-3 px-4 text-center">Actual Regs</th>
              <th className="py-3 px-4 text-center">Conversion</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 bg-slate-900/60">
            {filteredPartners.map(partner => (
              <tr key={partner.id} className="hover:bg-slate-800/40 transition-colors">
                
                {/* Community / Club */}
                <td className="py-3 px-4">
                  <div className="font-semibold text-white">{partner.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono">Lead: {partner.leadContact}</div>
                </td>

                {/* College */}
                <td className="py-3 px-4 text-slate-300">
                  {partner.college}
                </td>

                {/* Channel */}
                <td className="py-3 px-4">
                  <span className="font-mono text-[11px] text-indigo-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {partner.channel}
                  </span>
                </td>

                {/* Target */}
                <td className="py-3 px-4 text-center font-mono font-medium text-slate-300">
                  {partner.targetRegistrations}
                </td>

                {/* Actual Regs */}
                <td className="py-3 px-4 text-center font-mono font-bold">
                  <span className={partner.actualRegistrations >= 15 ? 'text-emerald-400' : 'text-indigo-400'}>
                    {partner.actualRegistrations}
                  </span>
                  <span className="text-slate-600 font-normal"> / 15</span>
                </td>

                {/* Conversion Rate */}
                <td className="py-3 px-4 text-center font-mono text-emerald-400">
                  {partner.conversionRate}%
                </td>

                {/* Status Dropdown */}
                <td className="py-3 px-4">
                  <select
                    value={partner.status}
                    onChange={(e) => updatePartnerStatus(partner.id, e.target.value as CommunityStatus)}
                    className={`text-[10px] font-mono px-2 py-1 rounded border outline-none font-semibold ${getStatusBadge(partner.status)}`}
                  >
                    <option value="NOT STARTED">NOT STARTED</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="INTERESTED">INTERESTED</option>
                    <option value="LIVE">LIVE</option>
                    <option value="FOLLOW-UP">FOLLOW-UP</option>
                    <option value="COMPLETED">COMPLETED</option>
                  </select>
                </td>

                {/* Actions */}
                <td className="py-3 px-4 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      onClick={() => handleTestLink(partner)}
                      title="Test Student Experience with this College Pass"
                      className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-indigo-400 border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => simulateBatchRegistrations(partner.id, 2)}
                      title="Simulate +2 Registrations"
                      className="text-[10px] font-mono bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 border border-indigo-500/30 px-2 py-1 rounded transition-colors"
                    >
                      +2
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-[11px] text-slate-500 font-mono flex items-center justify-between">
        <span>* Clearly labelled SAMPLE / DEMO DATA for operational simulation</span>
        <span>Showing {filteredPartners.length} of {partners.length} partner communities</span>
      </div>

    </div>
  );
};
