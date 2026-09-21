import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sparkles,
  ArrowRight,
  Compass,
  Clock,
  TrendingDown,
  Building2,
  Briefcase,
  HardHat,
  Lock,
  ChevronDown,
  Check,
  Zap,
  FileSpreadsheet,
  Calculator,
  Download,
  Quote
} from 'lucide-react';

interface LandingStorytellingProps {
  onGetStarted: () => void;
  onExploreDemo: () => void;
}

export const LandingStorytelling: React.FC<LandingStorytellingProps> = ({
  onGetStarted,
  onExploreDemo,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [calcFloors, setCalcFloors] = useState<number>(25);

  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
  };

  const handleDownloadSampleBoQ = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "STT,Handle_CAD,Ten_Phong,Chu_Vi_m,Chieu_Cao_m,Khau_Tru_Cua_Di_m2,Khau_Tru_Cua_So_m2,Dien_Tich_Son_Tinh_m2\n"
      + "1,LWPOLYLINE #8F31,Phong Khach A101,26.50,3.20,-1.98,-2.24,80.58\n"
      + "2,LWPOLYLINE #4A9C,Phong Ngu Master A102,18.40,3.20,-1.98,-2.30,54.60\n"
      + "3,LWPOLYLINE #3B12,Phong Ngu Phu A103,15.20,3.20,-1.98,-1.80,44.86\n"
      + "4,LWPOLYLINE #6C44,Hanh Lang,21.80,3.20,-3.96,0.00,65.80\n";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "DuAn_Landmark_BoQ_Son_TCVN8652.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="storytelling" className="bg-[#0c0e12] text-white overflow-hidden drafting-grid-dark relative">
      {/* ─────────────────────────────────────────────────────────────
          1. BỐI CẢNH & ĐỐI CHIẾU: THỦ CÔNG VS AI SPATIAL TAKE-OFF
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-[#0a0c10] relative overflow-hidden">
        {/* Ambient Spotlights & Depth Glows */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.08),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-[radial-gradient(circle,rgba(255,196,116,0.14),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffc474]/[0.02] to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] shadow-[0_0_20px_rgba(255,196,116,0.15)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffc474] animate-pulse" />
              Đối chiếu Thực tế // Đo tay vs AI
            </div>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-2 leading-[1.15]">
              Rút ngắn thời gian bóc tách từ <span className="text-white/50 line-through decoration-rose-500/70">14 ngày</span> còn <span className="text-[#ffc474] italic drop-shadow-[0_0_20px_rgba(255,196,116,0.35)]">2 giờ.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed font-sans-tight max-w-2xl mx-auto">
              Bóc tách diện tích sơn hoàn thiện là công tác tiêu tốn nhiều thời gian nhất nhưng lại dễ phát sinh sai lệch và tranh chấp nhất khi nghiệm thu quyết toán.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
            {/* Cột 1: Đo tay truyền thống (Mờ hơn, viền âm tính) */}
            <motion.div 
              {...fadeInUp}
              className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#12141a]/95 relative flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-md group hover:border-white/20 transition-all"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
                    <span className="font-mono text-xs font-bold text-white/80 uppercase tracking-wider">
                      Đo tay thủ công (PLINE & Excel)
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-rose-500/10 text-rose-300 border border-rose-500/25">
                    Rủi ro cao
                  </span>
                </div>

                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">14 ngày bóc tách cho toà tháp 25 tầng</h4>
                      <p className="text-xs text-white/60 mt-1">Kỹ sư phải bo từng góc phòng, tự tính nhẩm trừ từng cửa đi và cửa sổ trên hàng chục mặt bằng.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Sai số 3.5% – 6.0% diện tích lỗ mở</h4>
                      <p className="text-xs text-white/60 mt-1">Dễ bỏ sót cửa hoặc tính trùng vách giáp ranh, dẫn đến thiếu hụt vật tư hoặc đội chi phí công trình.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 shrink-0">
                      <FileSpreadsheet className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Con số chết Excel – Khó giải trình</h4>
                      <p className="text-xs text-white/60 mt-1">Khi Ban kiểm toán hoặc Chủ đầu tư chất vấn, kỹ sư phải mất 3 ngày mở lại từng bản vẽ để đo tay đối chứng.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-white/40 flex items-center justify-between">
                <span>Hiệu suất: Thấp</span>
                <span className="text-rose-400/80">Rủi ro quyết toán cao</span>
              </div>
            </motion.div>

            {/* Cột 2: AI Spatial Take-off (NỔI BẬT CAO - ÁNH SÁNG VÀNG AMBER VÀ NỀN SÁNG HƠN) */}
            <motion.div 
              {...fadeInUp}
              className="p-6 sm:p-8 rounded-2xl border border-amber-300/50 bg-gradient-to-b from-[#181b26] to-[#12141c] relative flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(255,196,116,0.18)] backdrop-blur-xl group hover:border-amber-300/80 transition-all overflow-hidden"
            >
              {/* Luminous Top Shimmer Line */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ffc474] to-transparent shadow-[0_0_12px_rgba(255,196,116,0.8)]" />
              {/* Subtle inner radial glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(255,196,116,0.2),transparent_70%)] blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffc474] shadow-[0_0_12px_rgba(255,196,116,0.9)] animate-pulse" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      AI Spatial Take-off Platform
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    Chính xác 99.8%
                  </span>
                </div>

                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/25">
                    <div className="w-8 h-8 rounded-lg bg-[#ffc474]/20 border border-[#ffc474]/40 flex items-center justify-center text-[#ffc474] shrink-0 shadow-[0_0_10px_rgba(255,196,116,0.3)]">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>2 giờ hoàn tất toàn bộ toà tháp</span>
                        <span className="px-1.5 py-0.2 text-[10px] font-mono bg-amber-400 text-black font-bold rounded">10x</span>
                      </h4>
                      <p className="text-xs text-white/80 mt-1">Đọc trực tiếp vector DXF, tự động khép kín đa giác phòng và khấu trừ lỗ mở chỉ sau 1 click nạp file.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Chuẩn hóa 100% theo TCVN 8652:2012</h4>
                      <p className="text-xs text-white/80 mt-1">Tự động nhận diện cửa đi A-DOOR và cửa sổ A-WINDOW để trừ chính xác từng cm² diện tích sơn tường.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-[#ffc474]/15 border border-[#ffc474]/30 flex items-center justify-center text-[#ffc474] shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Liên kết 2 chiều CAD ⇄ BoQ</h4>
                      <p className="text-xs text-white/80 mt-1">Bấm vào bất kỳ dòng nào trong bảng dự toán sẽ tự động highlight phòng tương ứng trên bản vẽ CAD.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 text-xs font-mono text-[#ffc474] flex items-center justify-between relative z-10">
                <span className="font-bold">⚡ Hiệu suất: Tăng 10x</span>
                <span className="text-emerald-300 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Minh bạch kiểm toán 100%
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. QUY TRÌNH 4 BƯỚC KHÉP KÍN (WORKFLOW PIPELINE WITH AMBIENT GLOW)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-b border-white/10 bg-[#0d1017] relative overflow-hidden">
        {/* Large Central Tech Beam */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[18rem] rounded-full bg-[radial-gradient(ellipse,rgba(255,196,116,0.06),transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-[0.2em] text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.15)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              Quy trình Tự động Hóa
            </div>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-2">
              Từ file CAD 2D thô đến bảng dự toán hoàn chỉnh
            </h2>
            <p className="text-sm text-white/70 mt-3 font-sans-tight max-w-2xl mx-auto">
              Bốn bước xử lý khép kín, luân chuyển dữ liệu vector tự động và loại bỏ hoàn toàn các công đoạn đo vẽ thủ công.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {[
              {
                step: '01',
                title: 'Nạp Vector DXF Gốc',
                desc: 'Đọc trực tiếp thực thể AutoCAD (LWPOLYLINE, LINE, TEXT) từ file DXF R12–2024. Không qua raster pixel.',
                badge: 'Vector AC1032',
                badgeColor: 'text-sky-300 bg-sky-500/10 border-sky-500/30',
                icon: FileText
              },
              {
                step: '02',
                title: 'Phân tích Không gian AI',
                desc: 'Tự động khép kín đa giác phòng, vá các khe hở ≤ 50mm và phân loại cửa đi, cửa sổ theo layer.',
                badge: 'Spatial Engine',
                badgeColor: 'text-[#ffc474] bg-amber-500/10 border-amber-500/30',
                icon: Layers
              },
              {
                step: '03',
                title: 'Kỹ sư Thẩm định (HITL)',
                desc: 'Cảnh báo các vị trí bất thường để kỹ sư trực tiếp phê duyệt hoặc hiệu chỉnh đỉnh chỉ trong 1 click.',
                badge: 'Auditing 1-Click',
                badgeColor: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
                icon: ShieldCheck
              },
              {
                step: '04',
                title: 'Xuất BoQ & Đơn giá',
                desc: 'Tính toán diện tích sơn theo TCVN 8652:2012, định mức thùng sơn và xuất hồ sơ Excel đầy đủ công thức sống.',
                badge: 'Live BoQ Export',
                badgeColor: 'text-amber-300 bg-amber-500/15 border-amber-500/30',
                icon: FileSpreadsheet
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  className="p-5 sm:p-6 rounded-2xl border border-white/12 bg-[#131620]/90 backdrop-blur-md hover:border-amber-300/50 hover:bg-[#171a27] transition-all group flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] relative"
                >
                  {/* Top shimmer accent */}
                  <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/20 group-hover:via-amber-300/60 to-transparent transition-all" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-3xl font-bold text-white/25 group-hover:text-[#ffc474] transition-colors">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ffc474] group-hover:border-amber-400/40 group-hover:bg-amber-500/10 transition-all shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ffc474] transition-colors">{item.title}</h3>
                    <p className="text-xs text-white/70 leading-relaxed font-sans-tight">{item.desc}</p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between">
                    <span className={`inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${item.badgeColor} font-semibold`}>
                      {item.badge}
                    </span>
                    <span className="text-white/30 text-xs font-mono group-hover:text-amber-300/80 transition-colors">
                      {idx < 3 ? '→' : '✓'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BENTO-GRID: 3 TRỤ CỘT KỸ THUẬT CỐT LÕI (HIGH CONTRAST & DEPTH)
      ───────────────────────────────────────────────────────────── */}
      <section id="detection" className="py-16 sm:py-24 border-b border-white/10 bg-[#0a0c10] relative scroll-mt-14 overflow-hidden">
        <div id="estimate" className="scroll-mt-20" />
        <div id="traceability" className="scroll-mt-20" />

        {/* Ambient Halo Lighting */}
        <div className="absolute left-[10%] top-[20%] w-[30rem] h-[30rem] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.1),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute right-[10%] top-[25%] w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle,rgba(255,196,116,0.12),transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-[0.2em] text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Công nghệ Lõi
            </div>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-2">
              Ba Nền tảng Kỹ thuật Độc bản
            </h2>
            <p className="text-sm text-white/70 mt-3 font-sans-tight max-w-2xl mx-auto">
              Đảm bảo số liệu bóc tách chuẩn xác đến từng đỉnh hình học, vững vàng trước mọi đợt thanh tra quyết toán.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Trụ cột 1: TCVN 8652:2012 */}
            <motion.div
              {...fadeInUp}
              className="p-6 sm:p-7 rounded-2xl bg-[#12151e]/95 border border-white/12 shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-md hover:border-amber-300/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#ffc474] mb-5 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,196,116,0.15)]">
                  <Calculator className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#ffc474] font-bold tracking-wider">TCVN 8652:2012</span>
                <h3 className="text-lg font-bold text-white mt-1.5">Khấu trừ Lỗ mở Tự động</h3>
                <p className="text-xs text-white/70 mt-2.5 leading-relaxed font-sans-tight">
                  Áp dụng nghiêm ngặt công thức tiêu chuẩn: Diện tích sơn tường = Chu vi × Chiều cao tầng - Diện tích toàn bộ cửa đi và cửa sổ kiến trúc.
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-[#0c0e14] border border-white/10 font-mono text-xs text-white/80 space-y-1.5 shadow-inner">
                  <div className="text-amber-300 font-bold flex items-center justify-between">
                    <span>S_sơn = (P × H) - Σ(S_cửa)</span>
                    <span className="text-[10px] text-white/40">TCVN</span>
                  </div>
                  <div className="text-[11px] text-white/60">Cửa D01: 0.9m × 2.2m = <span className="text-rose-400 font-semibold">-1.98 m²</span></div>
                  <div className="text-[11px] text-white/60">Cửa W02: 1.6m × 1.4m = <span className="text-rose-400 font-semibold">-2.24 m²</span></div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Khấu trừ tự động 100%
              </div>
            </motion.div>

            {/* Trụ cột 2: Kỹ sư Thẩm định (HITL - ĐƯỢC TÔ ĐẬM NỔI BẬT NHẤT) */}
            <motion.div
              {...fadeInUp}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#181a24] to-[#12141c] border border-amber-300/50 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_35px_rgba(255,196,116,0.15)] backdrop-blur-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ffc474] to-transparent shadow-[0_0_12px_rgba(255,196,116,0.8)]" />

              <div>
                <div className="w-11 h-11 rounded-xl bg-[#ffc474]/20 border border-[#ffc474]/40 flex items-center justify-center text-[#ffc474] mb-5 shadow-[0_0_15px_rgba(255,196,116,0.25)]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[#ffc474] font-bold tracking-wider">HUMAN-IN-THE-LOOP</span>
                <h3 className="text-lg font-bold text-white mt-1.5">Kỹ sư Toàn quyền Thẩm định</h3>
                <p className="text-xs text-white/80 mt-2.5 leading-relaxed font-sans-tight">
                  AI gợi ý - Kỹ sư quyết định. Hệ thống tự động khoanh vùng các vị trí tường hở, ranh giới chưa khép kín để kỹ sư phê duyệt hoặc nắn đỉnh chỉ với 1 click.
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-[#0c0e14] border border-amber-500/30 font-mono text-xs space-y-2 shadow-inner">
                  <div className="flex justify-between items-center text-amber-300 font-semibold">
                    <span>⚠️ Khe hở tường #A103:</span>
                    <span className="font-bold text-white px-2 py-0.5 rounded bg-amber-500/20">24 mm</span>
                  </div>
                  <div className="text-[11px] text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>AI đã tự vá snapping &lt; 50mm</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 text-xs font-mono text-[#ffc474] flex items-center gap-1.5 font-semibold">
                <Check className="w-3.5 h-3.5" /> Không bao giờ tin mù quáng vào AI
              </div>
            </motion.div>

            {/* Trụ cột 3: Truy vết 2 Chiều */}
            <motion.div
              {...fadeInUp}
              className="p-6 sm:p-7 rounded-2xl bg-[#12151e]/95 border border-white/12 shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-md hover:border-emerald-400/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold tracking-wider">2-WAY TRACEABILITY</span>
                <h3 className="text-lg font-bold text-white mt-1.5">Truy vết Ngược CAD ⇄ BoQ</h3>
                <p className="text-xs text-white/70 mt-2.5 leading-relaxed font-sans-tight">
                  Mỗi con số trong bảng tính Excel đều gắn vĩnh viễn với Handle thực thể CAD DXF gốc. Khi thanh tra chất vấn, click vào dòng dự toán là bản vẽ tự zoom đến phòng tương ứng.
                </p>

                <div className="mt-5 p-3.5 rounded-xl bg-[#0c0e14] border border-white/10 font-mono text-xs text-white/80 space-y-1.5 shadow-inner">
                  <div className="text-emerald-400 font-bold flex items-center justify-between">
                    <span>Handle DXF: #8F31</span>
                    <span className="text-[10px] text-emerald-400/70 font-mono">BẤT BIẾN</span>
                  </div>
                  <div className="text-[11px] text-white/60">Dòng BoQ #1: Phòng Khách A101</div>
                  <div className="text-[11px] text-emerald-300 font-medium">Độ tin cậy: 98% · Đã kiểm định ✓</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> Minh bạch kiểm toán 100%
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. HIỆU QUẢ KINH TẾ (ROI CALCULATOR) & MẪU DỰ TOÁN BOQ (VÀNG AMBER PHÁT SÁNG)
      ───────────────────────────────────────────────────────────── */}
      <section id="roi-assurance" className="py-16 sm:py-24 border-b border-white/10 bg-[#0e1017] relative overflow-hidden">
        {/* Luminous Warm Radial Flare behind the ROI Center */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[38rem] bg-[radial-gradient(ellipse_at_center,rgba(255,196,116,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] shadow-[0_0_20px_rgba(255,196,116,0.15)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffc474] animate-pulse" />
              Hiệu quả Kinh tế // ROI Bảo chứng
            </div>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-2">
              Dự tính Tiết kiệm theo Quy mô Dự án
            </h2>
            <p className="text-white/70 text-xs sm:text-sm mt-3 font-sans-tight max-w-xl mx-auto">
              Kéo thanh trượt để xem ngay số giờ công, chi phí nhân sự và lượng vật tư sơn được bảo vệ.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ROI Slider Panel (7 cols - LUXURY METALLIC GLOW) */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-amber-300/40 bg-gradient-to-b from-[#151824] to-[#10121a] shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(255,196,116,0.12)] space-y-6 relative overflow-hidden backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ffc474] to-transparent shadow-[0_0_12px_rgba(255,196,116,0.8)]" />

              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-white/60 block">Quy mô công trình</span>
                  <span className="text-3xl sm:text-4xl font-bold font-mono text-[#ffc474] tracking-tight drop-shadow-[0_0_20px_rgba(255,196,116,0.4)]">
                    {calcFloors} Tầng
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-white/60 block">Diện tích sàn ước tính</span>
                  <span className="text-base font-mono text-white font-bold">
                    ~{(calcFloors * 1400).toLocaleString('vi-VN')} m² sàn
                  </span>
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono text-white/70">
                  <span>5 tầng (Thấp tầng)</span>
                  <span className="text-[#ffc474] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40">
                    {calcFloors} tầng
                  </span>
                  <span>50 tầng (Toà tháp cao cấp)</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={calcFloors}
                  onChange={(e) => setCalcFloors(Number(e.target.value))}
                  className="w-full h-3 bg-[#1e2333] rounded-lg appearance-none cursor-pointer accent-[#ffc474] shadow-inner"
                />
              </div>

              {/* 3 Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-[#0d1017] border border-white/10 text-center shadow-inner">
                  <span className="text-xs text-white/70 font-sans-tight block">Thời gian bóc tách</span>
                  <div className="text-2xl font-bold font-mono text-emerald-400 mt-1.5 drop-shadow-[0_0_12px_rgba(52,211,153,0.3)]">
                    {(calcFloors * 0.1).toFixed(1)} giờ
                  </div>
                  <span className="text-[10px] text-white/50 font-mono mt-0.5 block">thay vì {calcFloors * 4} giờ đo tay</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0d1017] border border-amber-500/20 text-center shadow-inner">
                  <span className="text-xs text-white/70 font-sans-tight block">Giờ công tiết kiệm</span>
                  <div className="text-2xl font-bold font-mono text-[#ffc474] mt-1.5 drop-shadow-[0_0_12px_rgba(255,196,116,0.3)]">
                    {Math.round(calcFloors * 3.8)} giờ
                  </div>
                  <span className="text-[10px] text-[#ffc474]/80 font-mono mt-0.5 block">giảm 92% khối lượng</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0d1017] border border-white/10 text-center shadow-inner">
                  <span className="text-xs text-white/70 font-sans-tight block">Chi phí bảo vệ được</span>
                  <div className="text-2xl font-bold font-mono text-white mt-1.5">
                    ~{Math.round(calcFloors * 7.5)} tr VNĐ
                  </div>
                  <span className="text-[10px] text-white/50 font-mono mt-0.5 block">chống hao hụt vật tư</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center gap-2.5 shadow-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Hoàn vốn (Payback) ngay từ dự án đầu tiên sau 1 lần xuất hồ sơ thầu.</span>
              </div>
            </motion.div>

            {/* BoQ Sample Preview Card (5 cols) */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-5 p-6 sm:p-7 rounded-2xl border border-white/15 bg-[#12141c]/95 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-[#ffc474]" />
                    <span className="font-mono text-xs font-bold text-white">Mẫu Hồ Sơ BoQ Excel</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/35 font-semibold">
                    Công thức sống
                  </span>
                </div>

                <p className="text-xs text-white/70 mt-3.5 font-sans-tight leading-relaxed">
                  Bảng dự toán xuất ra chứa công thức `=ROUND(...)` nguyên bản, sẵn sàng nộp cho Ban quản lý dự án hoặc Chủ đầu tư.
                </p>

                {/* Mini Preview Table */}
                <div className="mt-4 rounded-xl border border-white/10 overflow-hidden text-[11px] font-mono shadow-inner">
                  <div className="bg-[#181a24] text-white/70 px-3.5 py-2 font-bold border-b border-white/10 grid grid-cols-3">
                    <span>Phòng / Handle</span>
                    <span className="text-right">Khấu trừ cửa</span>
                    <span className="text-right text-[#ffc474]">Sơn thực</span>
                  </div>
                  <div className="divide-y divide-white/5 bg-[#0e1017]">
                    <div className="px-3.5 py-2 grid grid-cols-3 text-white/80">
                      <span className="truncate">A101 (#8F31)</span>
                      <span className="text-right text-rose-400 font-semibold">-4,22 m²</span>
                      <span className="text-right font-bold text-white">80,58 m²</span>
                    </div>
                    <div className="px-3.5 py-2 grid grid-cols-3 text-white/80">
                      <span className="truncate">A102 (#4A9C)</span>
                      <span className="text-right text-rose-400 font-semibold">-4,28 m²</span>
                      <span className="text-right font-bold text-white">54,60 m²</span>
                    </div>
                    <div className="px-3.5 py-2 grid grid-cols-3 text-white/80">
                      <span className="truncate">A103 (#3B12)</span>
                      <span className="text-right text-rose-400 font-semibold">-3,78 m²</span>
                      <span className="text-right font-bold text-white">44,86 m²</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={handleDownloadSampleBoQ}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer border border-white/20 active:scale-98 shadow-sm"
                >
                  <Download className="w-4 h-4 text-[#ffc474]" />
                  <span>Tải file Excel BoQ mẫu (.csv)</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. BẢO CHỨNG ĐỐI TÁC & BẢO MẬT BẢN VẼ
      ───────────────────────────────────────────────────────────── */}
      <section id="security" className="py-16 sm:py-24 border-b border-white/10 bg-[#0a0c10] relative overflow-hidden">
        <div id="social-proof" className="scroll-mt-20" />
        <div id="cad-security" className="scroll-mt-20" />

        {/* Ambient Security Shield Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[24rem] rounded-full bg-[radial-gradient(ellipse,rgba(16,185,129,0.06),transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Partner Strip */}
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/50 block mb-5 font-semibold">
              Được tin cậy bởi các kỹ sư dự toán tại các tổng thầu hàng đầu
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-mono tracking-widest text-white/80">
              <span className="border border-white/15 bg-white/[0.03] px-4 py-1.5 rounded-lg backdrop-blur-sm hover:border-amber-300/40 transition-colors">COTECCONS</span>
              <span className="border border-white/15 bg-white/[0.03] px-4 py-1.5 rounded-lg backdrop-blur-sm hover:border-amber-300/40 transition-colors">HOA BINH CORP</span>
              <span className="border border-white/15 bg-white/[0.03] px-4 py-1.5 rounded-lg backdrop-blur-sm hover:border-amber-300/40 transition-colors">RICONS</span>
              <span className="border border-white/15 bg-white/[0.03] px-4 py-1.5 rounded-lg backdrop-blur-sm hover:border-amber-300/40 transition-colors">VINGROUP</span>
              <span className="border border-white/15 bg-white/[0.03] px-4 py-1.5 rounded-lg backdrop-blur-sm hover:border-amber-300/40 transition-colors">GAMUDA LAND</span>
            </div>
          </motion.div>

          {/* Testimonial Quote */}
          <motion.div
            {...fadeInUp}
            className="p-7 sm:p-9 rounded-2xl bg-gradient-to-b from-[#141724] to-[#10121c] border border-white/15 max-w-3xl mx-auto relative text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md"
          >
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#ffc474]/50 to-transparent" />
            <Quote className="w-9 h-9 text-[#ffc474]/40 mx-auto mb-4" />
            <p className="text-sm sm:text-base text-white/95 italic font-sans-tight leading-relaxed">
              "Trước đây mỗi khi Chủ đầu tư yêu cầu bảo vệ khối lượng sơn toà tháp 25 tầng, phòng QS phải mất 3 ngày đo lại từng phòng. Giờ đây nhờ tính năng đối soát 2 chiều, chỉ cần click vào dòng BoQ là ra ngay phòng CAD với Handle bất biến."
            </p>
            <div className="mt-5 pt-4 border-t border-white/10 text-xs font-mono">
              <span className="text-[#ffc474] font-bold">KTS. Nguyễn Hoàng Nam</span>
              <span className="text-white/60 ml-2">· Trưởng bộ phận Dự toán & Đấu thầu</span>
            </div>
          </motion.div>

          {/* Security Banner */}
          <motion.div
            {...fadeInUp}
            className="mt-8 p-4 sm:p-5 rounded-xl bg-[#12141a]/95 border border-emerald-500/30 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Lock className="w-5 h-5" />
            </div>
            <div className="text-xs text-white/80">
              <strong className="text-white block sm:inline font-mono">Bảo mật Bản vẽ Tuyệt đối:</strong> Bản vẽ CAD được xử lý trực tiếp trên bộ nhớ máy cục bộ (Client-side Vector Processing). Dữ liệu thiết kế mật của dự án không bao giờ bị lưu trữ hay chia sẻ cho bên thứ ba.
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CÂU HỎI THƯỜNG GẶP (FAQ CỐT LÕI)
      ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-16 sm:py-24 border-b border-white/10 bg-[#0e1017] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ffc474] shadow-[0_0_20px_rgba(255,196,116,0.15)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffc474] animate-pulse" />
              Hỏi đáp Kỹ thuật
            </div>
            <h2 className="font-serif-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight mt-2">
              Những câu hỏi thường gặp
            </h2>
          </motion.div>

          <div className="space-y-3.5">
            {[
              {
                q: 'Phần mềm hỗ trợ định dạng và phiên bản AutoCAD nào?',
                a: 'Ứng dụng hỗ trợ trực tiếp các file AutoCAD DXF từ chuẩn R12 đến 2024 (bao gồm AC1009, AC1015, AC1027, AC1032...). Bạn chỉ cần dùng lệnh SAVEAS hoặc EXPORT ra định dạng DXF từ bất kỳ phần mềm CAD nào (AutoCAD, BricsCAD, ZwCAD) và kéo thả vào hệ thống.'
              },
              {
                q: 'Nếu nét vẽ trên bản vẽ CAD bị hở hoặc phân mảnh thì AI xử lý thế nào?',
                a: 'Hệ thống tích hợp thuật toán Vector Snapping tự động vá các khe hở ≤ 50mm. Với các khe hở lớn hơn hoặc tường bị đứt đoạn, cơ chế Human-in-the-Loop sẽ gắn cờ cảnh báo màu vàng để kỹ sư kiểm tra và bấm nút đóng đa giác chỉ với 1 click.'
              },
              {
                q: 'Hồ sơ khối lượng xuất ra có chỉnh sửa và tích hợp vào dự toán G8/ETA được không?',
                a: 'Có. Hồ sơ xuất ra có định dạng Excel (.xlsx / .csv) chuẩn với các cột mã hiệu, tên phòng, chu vi, diện tích trừ cửa và công thức sống. Bạn có thể copy trực tiếp vào các phần mềm dự toán phổ biến như G8, Acitt, F1 hoặc dự toán nội bộ của doanh nghiệp.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className={`rounded-2xl border transition-all duration-300 ${
                  openFaq === idx 
                    ? 'border-amber-400/40 bg-[#161924] shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(255,196,116,0.08)]' 
                    : 'border-white/10 bg-[#12141c]/90 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className={`text-sm font-semibold transition-colors ${openFaq === idx ? 'text-[#ffc474]' : 'text-white'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${openFaq === idx ? 'bg-amber-500/20 text-[#ffc474]' : 'bg-white/5 text-white/50'}`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-white/80 leading-relaxed font-sans-tight border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. FINAL CALL-TO-ACTION (DRAMATIC CINEMATIC CLOSING)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#090b0e] text-white text-center relative overflow-hidden border-t border-white/10">
        {/* Massive Warm Dome Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,196,116,0.16)_0%,rgba(9,11,14,0.95)_70%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ffc474] to-transparent shadow-[0_0_15px_rgba(255,196,116,0.8)]" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <h2 className="font-serif-cormorant text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
            Sẵn sàng chuyển đổi quy trình <br />
            <span className="text-[#ffc474] italic drop-shadow-[0_0_30px_rgba(255,196,116,0.4)]">
              bóc tách sơn chuyên nghiệp?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/75 mt-4 max-w-xl mx-auto font-sans-tight">
            Nạp bản vẽ DXF dự án của bạn ngay hôm nay để trải nghiệm tốc độ bóc tách 2 giờ thay vì 14 ngày.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="amber-button inline-flex items-center gap-2 px-9 py-4 text-sm font-semibold rounded-2xl shadow-[0_10px_35px_rgba(255,196,116,0.4)] cursor-pointer active:scale-95 transition-all"
            >
              <span>Nạp bản vẽ DXF ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExploreDemo}
              className="dense-panel inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 rounded-2xl transition-all cursor-pointer shadow-lg border border-white/20 active:scale-95 backdrop-blur-xl"
            >
              <Compass className="w-4 h-4 text-[#ffc474]" />
              <span>Khám phá Dự án mẫu Sunrise Tower</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
